
import { Button, Dropdown, type DropdownItem } from "sketchbook-ui"
import { type NavigateFunction } from "react-router-dom";

type Props = {
	navigate: NavigateFunction
}

export default function Header(props: Props) {
	const pages : DropdownItem[] = [
		{ label: 'People', onClick: () => props.navigate("/people") },
		{ label: 'Gropus', onClick: () => props.navigate("/groups") },
		{ label: 'Mores', onClick: () => props.navigate("/mores") },
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
				<Dropdown items={pages} triggerIcon='menu' size="lg"></Dropdown>
				<Button onClick={() => props.navigate("/")} size="sm">Summorist</Button>
			</div>
			<div style={{gap: 10, display: "flex", alignItems: "center"}}>
				<Button iconOnly={true} size="sm">P</Button>
			</div>
		</nav>
	)
}