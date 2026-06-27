
import { Button, Dropdown, type DropdownItem } from "sketchbook-ui"

const pages : DropdownItem[] = [
  { label: 'People', onClick: () => console.log('Edit') },
  { label: 'Gropus', onClick: () => console.log('Duplicate') },
  { label: 'Mores', onClick: () => console.log('Delete') },
];

export default function Header() {
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
                <Button>Summorist</Button>
            </div>
            <div style={{gap: 10, display: "flex", alignItems: "center"}}>
                <Button iconOnly={true}>U</Button>
            </div>
        </nav>
    )
}