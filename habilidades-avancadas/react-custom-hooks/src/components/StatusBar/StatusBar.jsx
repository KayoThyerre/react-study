import { useOnlineStatus } from "../../hooks/useOnlineStatus";

export default function StatusBar() {
    const isOnline = useOnlineStatus();
    
    return (
        <>
            <h1>{isOnline ? " ✅ Está Online ! " : " ❌ Está Desconectado. "}</h1>
        </>
    )
}