"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

type GridState = {
  cols: number;
  rows: number;
  cellSize: number;
};

type Point = {
  x: number;
  y: number;
};

function getCellSize(width: number) {
  if (width < 640) {
    return 54;
  }

  if (width < 1024) {
    return 68;
  }

  return 84;
}

function getHighlightIndices(
  col: number,
  row: number,
  cols: number,
  rows: number
) {
  const points = [
    [col, row],
    [col - 1, row],
    [col + 1, row],
    [col, row - 1],
    [col, row + 1],
  ];

  return points
    .filter(([currentCol, currentRow]) => {
      return (
        currentCol >= 0 &&
        currentCol < cols &&
        currentRow >= 0 &&
        currentRow < rows
      );
    })
    .map(([currentCol, currentRow]) => currentRow * cols + currentCol);
}

export default function BackgroundGrid() {
  const [grid, setGrid] = useState<GridState>({
    cols: 1,
    rows: 1,
    cellSize: 84,
  });

  const rootRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef(grid);
  const rafRef = useRef<number | null>(null);
  const latestPointerRef = useRef<Point | null>(null);
  const highlightedRef = useRef<number[]>([]);

  useEffect(() => {
    gridRef.current = grid;
  }, [grid]);

  useEffect(() => {
    const syncGrid = () => {
      const cellSize = getCellSize(window.innerWidth);
      const cols = Math.ceil(window.innerWidth / cellSize) + 1;
      const rows = Math.ceil(window.innerHeight / cellSize) + 1;

      setGrid((current) => {
        if (
          current.cols === cols &&
          current.rows === rows &&
          current.cellSize === cellSize
        ) {
          return current;
        }

        return { cols, rows, cellSize };
      });
    };

    syncGrid();
    window.addEventListener("resize", syncGrid);

    return () => {
      window.removeEventListener("resize", syncGrid);
    };
  }, []);

  useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    const clearHighlights = () => {
      const inner = root.firstElementChild;

      if (!inner) {
        highlightedRef.current = [];
        return;
      }

      for (const index of highlightedRef.current) {
        const cell = inner.children[index] as HTMLElement | undefined;

        if (!cell) {
          continue;
        }

        cell.classList.remove("site-background-grid__cell--active");
        cell.classList.remove("site-background-grid__cell--nearby");
      }

      highlightedRef.current = [];
    };

    const applyPointerEffects = () => {
      rafRef.current = null;

      const point = latestPointerRef.current;
      const inner = root.firstElementChild;

      if (!point || !inner) {
        return;
      }

      root.style.setProperty("--spotlight-x", `${point.x}px`);
      root.style.setProperty("--spotlight-y", `${point.y}px`);
      root.style.setProperty("--spotlight-opacity", "1");

      const currentGrid = gridRef.current;
      const col = Math.floor(point.x / currentGrid.cellSize);
      const row = Math.floor(point.y / currentGrid.cellSize);
      const nextIndices = getHighlightIndices(
        col,
        row,
        currentGrid.cols,
        currentGrid.rows
      );
      const activeIndex = row * currentGrid.cols + col;

      for (const index of highlightedRef.current) {
        if (nextIndices.includes(index)) {
          continue;
        }

        const cell = inner.children[index] as HTMLElement | undefined;

        if (!cell) {
          continue;
        }

        cell.classList.remove("site-background-grid__cell--active");
        cell.classList.remove("site-background-grid__cell--nearby");
      }

      for (const index of nextIndices) {
        const cell = inner.children[index] as HTMLElement | undefined;

        if (!cell) {
          continue;
        }

        if (index === activeIndex) {
          cell.classList.add("site-background-grid__cell--active");
          cell.classList.remove("site-background-grid__cell--nearby");
        } else {
          cell.classList.add("site-background-grid__cell--nearby");
          cell.classList.remove("site-background-grid__cell--active");
        }
      }

      highlightedRef.current = nextIndices;
    };

    const schedulePointerEffects = () => {
      if (rafRef.current !== null) {
        return;
      }

      rafRef.current = window.requestAnimationFrame(applyPointerEffects);
    };

    const handleMouseMove = (event: MouseEvent) => {
      latestPointerRef.current = {
        x: event.clientX,
        y: event.clientY,
      };
      schedulePointerEffects();
    };

    const clearPointerEffects = () => {
      latestPointerRef.current = null;
      root.style.setProperty("--spotlight-opacity", "0");
      clearHighlights();
    };

    const handleMouseOut = (event: MouseEvent) => {
      if (!event.relatedTarget) {
        clearPointerEffects();
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("blur", clearPointerEffects);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("blur", clearPointerEffects);
      window.removeEventListener("mouseout", handleMouseOut);

      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="site-background-grid"
      style={
        {
          "--grid-cell-size": `${grid.cellSize}px`,
          "--grid-gap": grid.cellSize < 60 ? "7px" : "10px",
          "--spotlight-opacity": 0,
        } as CSSProperties
      }
    >
      <div
        className="site-background-grid__inner"
        style={{
          gridTemplateColumns: `repeat(${grid.cols}, ${grid.cellSize}px)`,
          gridTemplateRows: `repeat(${grid.rows}, ${grid.cellSize}px)`,
          width: `${grid.cols * grid.cellSize}px`,
          height: `${grid.rows * grid.cellSize}px`,
        }}
      >
        {Array.from({ length: grid.cols * grid.rows }, (_, index) => (
          <span key={index} className="site-background-grid__cell" />
        ))}
      </div>
    </div>
  );
}
