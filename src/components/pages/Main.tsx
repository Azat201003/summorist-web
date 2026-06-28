import { RoughNotationGroup, RoughNotation } from "react-rough-notation"

export default function MainPage() {
    return (
        <>
            <section
                style={{
                    maxWidth: 860,
                    margin: "0 auto",
                    padding: "96px 32px 72px",
                    textAlign: "center",
                }}
            >
                
                <h1
                    style={{
                        fontFamily: "'Caveat', cursive",
                        fontSize: "clamp(2.8rem, 6vw, 4.4rem)",
                        fontWeight: 700,
                        lineHeight: 1.1,
                        margin: "0 0 24px",
                        color: "#1a1a1a",
                    }}
                >
                    Summorist - сервис для обмена конспектами
                </h1>
            </section>
        </>
    )
}
