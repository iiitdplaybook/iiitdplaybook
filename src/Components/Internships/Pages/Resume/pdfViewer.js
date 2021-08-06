import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./pdfViewer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PdfViewer({ file }) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber((prevPageNumber) => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    return (
        <>
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} scale={1.3} />
            </Document>
            <div class="page_num">
                <div>
                    <p>
                        Page {pageNumber || (numPages ? 1 : "--")} of{" "}
                        {numPages || "--"}
                    </p>
                </div>
                <div class="btn_group">
                    <button
                        class="btn_item"
                        type="button"
                        disabled={pageNumber <= 1}
                        onClick={previousPage}
                    >
                        Previous
                    </button>
                    <button
                        class="btn_item"
                        type="button"
                        disabled={pageNumber >= numPages}
                        onClick={nextPage}
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    );
}
