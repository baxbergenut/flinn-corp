"use client";

import type { CSSProperties } from "react";
import { useEffect, useEffectEvent, useState } from "react";

type GridState = {
  cols: number;
  rows: number;
  cellSize: number;
};

type PointerState = {
  x: number;
  y: number;
  visible: boolean;
};

type ActiveCell = {
  col: number;
  row: number;
} | null;

function getCellSize(width: number) {
  if (width < 640) {
    return 54;
  }

  if (width < 1024) {
    return 68;
  }

  return 84;
}

export default function BackgroundGrid() {
  const [grid, setGrid] = useState<GridState>({
    cols: 1,
    rows: 1,
    cellSize: 84,
  });
  const [pointer, setPointer] = useState<PointerState>({
    x: 0,
    y: 0,
    visible: false,
  });
  const [activeCell, setActiveCell] = useState<ActiveCell>(null);

  const syncGrid = useEffectEvent(() => {
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
  });

  const updateActiveCell = useEffectEvent((event: MouseEvent) => {
    const col = Math.floor(event.clientX / grid.cellSize);
    const row = Math.floor(event.clientY / grid.cellSize);

    setPointer((current) => {
      if (
        current.x === event.clientX &&
        current.y === event.clientY &&
        current.visible
      ) {
        return current;
      }

      return {
        x: event.clientX,
        y: event.clientY,
        visible: true,
      };
    });

    setActiveCell((current) => {
      if (current?.col === col && current.row === row) {
        return current;
      }

      return { col, row };
    });
  });

  const clearActiveCell = useEffectEvent(() => {
    setActiveCell(null);
    setPointer((current) =>
      current.visible ? { ...current, visible: false } : current
    );
  });

  useEffect(() => {
    syncGrid();

    const handleResize = () => syncGrid();
    const handleMouseMove = (event: MouseEvent) => updateActiveCell(event);
    const handleMouseOut = (event: MouseEvent) => {
      if (!event.relatedTarget) {
        clearActiveCell();
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("blur", clearActiveCell);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("blur", clearActiveCell);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="site-background-grid"
      style={
        {
          "--grid-cell-size": `${grid.cellSize}px`,
          "--grid-gap": grid.cellSize < 60 ? "7px" : "10px",
          "--spotlight-x": `${pointer.x}px`,
          "--spotlight-y": `${pointer.y}px`,
          "--spotlight-opacity": pointer.visible ? 1 : 0,
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
        {Array.from({ length: grid.cols * grid.rows }, (_, index) => {
          const col = index % grid.cols;
          const row = Math.floor(index / grid.cols);

          let cellClass = "site-background-grid__cell";

          if (activeCell) {
            const distance =
              Math.abs(activeCell.col - col) + Math.abs(activeCell.row - row);

            if (distance === 0) {
              cellClass += " site-background-grid__cell--active";
            } else if (distance === 1) {
              cellClass += " site-background-grid__cell--nearby";
            }
          }

          return <span key={`${col}-${row}`} className={cellClass} />;
        })}
      </div>
    </div>
  );
}
