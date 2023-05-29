import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

//Components
import Button1 from "./button1"

//Styles
import { Container, Row, Col, Button } from "react-bootstrap"
import * as styles from "../styles/components/welcome.module.css"

const Welcome = () => {
  return (
    <div className={`${styles.background}`}>
      <Container>
        <Row>
          <Col md={6}>
            <div className={styles.content}>
              <h1 className={styles.welcomeTitle}>
                An <span>immersive</span> co-op gaming experience
              </h1>
              <p>
                Hic quo molestiae sed accusantium omnis soluta omnis minima
                tempore perferendis voluptatem cum rerum non ratione.
              </p>
              <Button1 ButtonName="Book a session now!" />
              <Button
                className="bg-transparent border-0"
                style={{ color: "#B537F2" }}
              >
                <StaticImage src="../images/icons/arrow-icon.svg" alt="icon" />
                Explore all games
              </Button>
            </div>
          </Col>
          <Col md={6}>
            <StaticImage
              src="../images/hero-welcome.png"
              className={styles.heroImg}
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default Welcome
