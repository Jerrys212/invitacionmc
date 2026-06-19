import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import type { Guest, GuestStats } from "@/src/lib/types/rsvp";

const BURGUNDY_DARK = "#5c1a1a";
const BURGUNDY = "#7d2232";
const TAN = "#c4a882";
const CREAM = "#e8d5b0";
const IVORY = "#f5f0e8";

const styles = StyleSheet.create({
    page: {
        backgroundColor: IVORY,
        paddingTop: 36,
        paddingBottom: 48,
        paddingHorizontal: 40,
        fontFamily: "Helvetica",
    },
    header: {
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: TAN,
        paddingBottom: 16,
    },
    eyebrow: {
        fontSize: 9,
        letterSpacing: 3,
        color: BURGUNDY_DARK,
        opacity: 0.6,
        textTransform: "uppercase",
        marginBottom: 6,
    },
    title: {
        fontSize: 24,
        color: BURGUNDY_DARK,
        fontFamily: "Helvetica-Bold",
    },
    statsRow: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 12,
        marginBottom: 24,
    },
    statCard: {
        flexGrow: 1,
        alignItems: "center",
        borderWidth: 1,
        borderColor: TAN,
        paddingVertical: 10,
        backgroundColor: "#ffffff",
    },
    statValue: {
        fontSize: 18,
        fontFamily: "Helvetica-Bold",
        color: BURGUNDY_DARK,
    },
    statLabel: {
        fontSize: 7,
        letterSpacing: 1,
        color: BURGUNDY_DARK,
        opacity: 0.6,
        textTransform: "uppercase",
        marginTop: 2,
    },
    sectionTitle: {
        fontSize: 11,
        letterSpacing: 2,
        color: "#ffffff",
        textTransform: "uppercase",
        backgroundColor: BURGUNDY_DARK,
        paddingVertical: 6,
        paddingHorizontal: 10,
        marginBottom: 0,
    },
    table: {
        marginBottom: 20,
    },
    tableHeaderRow: {
        flexDirection: "row",
        backgroundColor: CREAM,
        borderBottomWidth: 1,
        borderBottomColor: TAN,
    },
    tableRow: {
        flexDirection: "row",
        borderBottomWidth: 0.5,
        borderBottomColor: TAN,
        paddingVertical: 6,
    },
    tableRowAlt: {
        backgroundColor: "#ffffff",
    },
    th: {
        fontSize: 8,
        letterSpacing: 1,
        color: BURGUNDY_DARK,
        textTransform: "uppercase",
        paddingVertical: 6,
        paddingHorizontal: 8,
    },
    td: {
        fontSize: 9,
        color: BURGUNDY_DARK,
        paddingHorizontal: 8,
    },
    colName: { width: "30%" },
    colStatus: { width: "16%" },
    colPases: { width: "10%" },
    colCompanions: { width: "32%" },
    colDate: { width: "12%" },
    badge: {
        fontSize: 7,
        letterSpacing: 0.5,
        textTransform: "uppercase",
        paddingVertical: 2,
        paddingHorizontal: 6,
        borderRadius: 2,
        alignSelf: "flex-start",
    },
    badgeYes: {
        backgroundColor: BURGUNDY_DARK,
        color: "#ffffff",
    },
    badgeNo: {
        backgroundColor: "transparent",
        borderWidth: 0.5,
        borderColor: BURGUNDY,
        color: BURGUNDY,
    },
    footer: {
        position: "absolute",
        bottom: 24,
        left: 40,
        right: 40,
        textAlign: "center",
        fontSize: 8,
        color: BURGUNDY_DARK,
        opacity: 0.5,
    },
    emptyState: {
        padding: 16,
        textAlign: "center",
        fontSize: 9,
        color: BURGUNDY_DARK,
        opacity: 0.5,
        fontStyle: "italic",
    },
});

function formatDate(date: Date) {
    return date.toLocaleDateString("es-MX", { day: "2-digit", month: "short", year: "numeric" });
}

function GuestRows({ guests }: { guests: Guest[] }) {
    if (guests.length === 0) {
        return <Text style={styles.emptyState}>Sin registros en esta categoría.</Text>;
    }

    return (
        <>
            {guests.map((guest, index) => (
                <View key={guest.id} style={[styles.tableRow, ...(index % 2 === 1 ? [styles.tableRowAlt] : [])]} wrap={false}>
                    <Text style={[styles.td, styles.colName]}>{guest.nombre}</Text>
                    <View style={[styles.td, styles.colStatus]}>
                        <Text style={[styles.badge, guest.asistencia ? styles.badgeYes : styles.badgeNo]}>
                            {guest.asistencia ? "Asiste" : "No asiste"}
                        </Text>
                    </View>
                    <Text style={[styles.td, styles.colPases]}>{guest.pases + 1}</Text>
                    <Text style={[styles.td, styles.colCompanions]}>{guest.acompañantes.length > 0 ? guest.acompañantes.join(", ") : "—"}</Text>
                    <Text style={[styles.td, styles.colDate]}>{formatDate(guest.createdAt)}</Text>
                </View>
            ))}
        </>
    );
}

function GuestTableSection({ title, guests }: { title: string; guests: Guest[] }) {
    return (
        <View style={styles.table}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <View style={styles.tableHeaderRow}>
                <Text style={[styles.th, styles.colName]}>Invitado</Text>
                <Text style={[styles.th, styles.colStatus]}>Asistencia</Text>
                <Text style={[styles.th, styles.colPases]}>Pases</Text>
                <Text style={[styles.th, styles.colCompanions]}>Acompañantes</Text>
                <Text style={[styles.th, styles.colDate]}>Fecha</Text>
            </View>
            <GuestRows guests={guests} />
        </View>
    );
}

interface GuestListDocumentProps {
    guests: Guest[];
    stats: GuestStats;
}

export function GuestListDocument({ guests, stats }: GuestListDocumentProps) {
    const confirmados = guests.filter((g) => g.asistencia);
    const noConfirmados = guests.filter((g) => !g.asistencia);

    return (
        <Document title="Lista de invitados" author="Mariana & Christopher">
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.eyebrow}>Mariana &amp; Christopher</Text>
                    <Text style={styles.title}>Lista de Invitados</Text>
                </View>

                <View style={styles.statsRow}>
                    <View style={styles.statCard}>
                        <Text style={styles.statValue}>{stats.totalRespuestas}</Text>
                        <Text style={styles.statLabel}>Respuestas</Text>
                    </View>
                    <View style={styles.statCard}>
                        <Text style={styles.statValue}>{stats.confirmados}</Text>
                        <Text style={styles.statLabel}>Confirmados</Text>
                    </View>
                    <View style={styles.statCard}>
                        <Text style={styles.statValue}>{stats.noConfirmados}</Text>
                        <Text style={styles.statLabel}>No confirmados</Text>
                    </View>
                    <View style={styles.statCard}>
                        <Text style={styles.statValue}>{stats.totalAsistentesConfirmados}</Text>
                        <Text style={styles.statLabel}>Asistentes totales</Text>
                    </View>
                </View>

                <GuestTableSection title="Confirmados" guests={confirmados} />
                <GuestTableSection title="No confirmados" guests={noConfirmados} />

                <Text style={styles.footer}>Generado automáticamente · {formatDate(new Date())}</Text>
            </Page>
        </Document>
    );
}
