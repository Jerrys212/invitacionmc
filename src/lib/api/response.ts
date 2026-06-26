import { NextResponse } from "next/server";
import { ZodError } from "zod";

export interface ApiIssue {
    path: string;
    message: string;
}

export type ApiResponse<T> = { success: true; data: T } | { success: false; error: string; issues?: ApiIssue[] };

export function apiSuccess<T>(data: T, status = 200) {
    return NextResponse.json<ApiResponse<T>>({ success: true, data }, { status });
}

export function apiError(error: string, status = 400, issues?: ApiIssue[]) {
    return NextResponse.json<ApiResponse<never>>({ success: false, error, issues }, { status });
}

/** Normaliza cualquier error capturado (zod, mongoose, etc.) a la misma forma de respuesta. */
export function apiErrorFromUnknown(err: unknown) {
    if (err instanceof ZodError) {
        const issues = err.issues.map((issue) => ({ path: issue.path.join("."), message: issue.message }));
        return apiError("Datos inválidos", 400, issues);
    }
    const message = err instanceof Error ? err.message : "Error inesperado";
    return apiError(message, 500);
}
