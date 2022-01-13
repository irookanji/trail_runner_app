import React from "react";
import { Container, Box, Typography } from "@mui/material";
import CustomButton from "../components/atoms/Button/CustomButton";

function About() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mt: "1.5rem",
      }}
    >
      <Typography
        gutterBottom
        sx={{
          mb: "2rem",
          fontSize: "3rem",
          lineHeight: "1.31",
          letterSpacing: ".5px",
        }}
      >
        How Can We Help?
      </Typography>
      <Typography variant="h5" gutterBottom sx={{ mb: "1.5rem" }}>
        Monday - Friday: 9:00 - 17:00 GMT
      </Typography>
      <Typography variant="h6" gutterBottom>
        Send us a message:
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ mb: "1.5rem" }}>
        help@allbirds.org.eu
      </Typography>
      <CustomButton
        text="Get In Touch"
        customWidth="260px"
        bgColor="#212a2f"
        textColor="white"
        hoverColor="grey"
      />
      <Typography gutterBottom sx={{ mt: "1.5rem" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
        explicabo temporibus quibusdam quis ipsam harum quidem. Alias explicabo
        incidunt dignissimos nesciunt! Explicabo quas molestias fuga neque
        nostrum voluptatem cumque quo amet iusto sint optio, dolore quasi veniam
        cupiditate voluptatibus ad distinctio? Doloremque quidem nobis
        dignissimos sed, voluptatum ut molestias? Alias eius quod in
        repellendus, ratione dolore illo, molestias culpa, commodi voluptatibus
        totam maxime quam. Facere aperiam animi blanditiis cum, voluptates
        aspernatur dolore mollitia non. Ipsum nostrum recusandae soluta corporis
        dolorum! Amet nemo excepturi nesciunt, dolorum rerum consequatur
        asperiores, voluptates obcaecati autem quae mollitia repellendus sed
        earum rem iure perferendis repudiandae magnam blanditiis cumque harum
        tempora minima nam quo cum. Provident sit esse, quis nulla culpa totam,
        sequi numquam accusantium ex ab non tenetur reprehenderit, magnam
        voluptates labore soluta vero. Molestiae culpa, sequi officiis accusamus
        vel tenetur cumque cum nostrum expedita impedit? Cumque natus qui,
        libero delectus saepe expedita hic soluta culpa eum nam commodi at quod
        eos excepturi quam rem consectetur accusamus error molestiae modi
        obcaecati temporibus vel, voluptatem numquam. Distinctio, perspiciatis
        sint omnis cupiditate tempore odit doloribus eius reiciendis dolorem
        numquam animi incidunt soluta quidem labore. Esse ratione suscipit optio
        animi ipsa magni? Eveniet nostrum debitis maxime, esse quidem eius
        tenetur repellendus! Repudiandae vero doloribus distinctio dolorum sunt
        ipsum nulla quidem possimus, fugit minus optio, atque odio laboriosam
        iste veniam alias mollitia eos aliquid dolorem perferendis officiis quo?
        Quos ex nobis harum, sequi, repellat aliquid ipsa omnis corporis, quam
        veniam sunt consectetur itaque cumque amet ipsum officiis. Odio,
        dolorem!
      </Typography>
    </Container>
  );
}

export default About;
