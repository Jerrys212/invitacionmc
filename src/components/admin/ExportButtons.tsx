import { FileSpreadsheet, FileText } from "lucide-react";

export default function ExportButtons() {
    return (
        <div className="flex flex-wrap gap-3">
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- file download, not a page route */}
            <a
                href="/api/invitados/export/pdf"
                className="btn-shine flex items-center justify-center gap-2 px-6 py-3 bg-burgundy-dark text-ivory font-serif text-sm tracking-[0.2em] uppercase hover:opacity-90 hover:scale-[1.01] active:scale-95 transition-all duration-300"
            >
                <FileText size={16} />
                Exportar PDF
            </a>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- file download, not a page route */}
            <a
                href="/api/invitados/export/excel"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-burgundy-dark/30 text-burgundy-dark font-serif text-sm tracking-[0.2em] uppercase hover:border-burgundy-dark/60 hover:scale-[1.01] active:scale-95 transition-all duration-300"
            >
                <FileSpreadsheet size={16} />
                Exportar Excel
            </a>
        </div>
    );
}
