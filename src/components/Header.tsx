
import { Button, Dropdown, type DropdownItem } from "sketchbook-ui"
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate()

    const pages : DropdownItem[] = [
        { label: 'People', onClick: () => navigate("/people") },
        { label: 'Gropus', onClick: () => navigate("/groups") },
        { label: 'Mores', onClick: () => navigate("/mores") },
    ];


    return (
        <nav
            style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "8px 80px",
            position: "sticky",
            top: 0,
            zIndex: 100,
            }}
        >
            <div style={{gap: 10, display: "flex", alignItems: "center"}}>
                <Dropdown items={pages} triggerIcon='menu'></Dropdown>
                <Button onClick={() => navigate("/")}>Summorist</Button>
            </div>
            <div style={{gap: 10, display: "flex", alignItems: "center"}}>
                <Button iconOnly={true}>П</Button>
            </div>
        </nav>
    )
}