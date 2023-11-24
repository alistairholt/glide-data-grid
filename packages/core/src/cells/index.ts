import { GridCellKind, InnerGridCellKind, type InnerGridCell } from "../internal/data-grid/data-grid-types.js";
import { booleanCellRenderer } from "./boolean-cell.js";
import { bubbleCellRenderer } from "./bubble-cell.js";
import type { InternalCellRenderer } from "./cell-types.js";
import { drilldownCellRenderer } from "./drilldown-cell.js";
import { imageCellRenderer } from "./image-cell.js";
import { loadingCellRenderer } from "./loading-cell.js";
import { markdownCellRenderer } from "./markdown-cell.js";
import { markerCellRenderer } from "./marker-cell.js";
import { newRowCellRenderer } from "./new-row-cell.js";
import { numberCellRenderer } from "./number-cell.js";
import { protectedCellRenderer } from "./protected-cell.js";
import { rowIDCellRenderer } from "./row-id-cell.js";
import { textCellRenderer } from "./text-cell.js";
import { uriCellRenderer } from "./uri-cell.js";

export const CellRenderers = {
    [InnerGridCellKind.Marker]: markerCellRenderer,
    [InnerGridCellKind.NewRow]: newRowCellRenderer,
    [GridCellKind.Boolean]: booleanCellRenderer,
    [GridCellKind.Bubble]: bubbleCellRenderer,
    [GridCellKind.Drilldown]: drilldownCellRenderer,
    [GridCellKind.Image]: imageCellRenderer,
    [GridCellKind.Loading]: loadingCellRenderer,
    [GridCellKind.Markdown]: markdownCellRenderer,
    [GridCellKind.Number]: numberCellRenderer,
    [GridCellKind.Protected]: protectedCellRenderer,
    [GridCellKind.RowID]: rowIDCellRenderer,
    [GridCellKind.Text]: textCellRenderer,
    [GridCellKind.Uri]: uriCellRenderer,
};

export const AllCellRenderers = [
    markerCellRenderer,
    newRowCellRenderer,
    booleanCellRenderer,
    bubbleCellRenderer,
    drilldownCellRenderer,
    imageCellRenderer,
    loadingCellRenderer,
    markdownCellRenderer,
    numberCellRenderer,
    protectedCellRenderer,
    rowIDCellRenderer,
    textCellRenderer,
    uriCellRenderer,
] as InternalCellRenderer<InnerGridCell>[];
