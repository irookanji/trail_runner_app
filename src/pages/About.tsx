import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import CustomButton from '../components/atoms/Button/CustomButton';

function About() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        mt: '6rem',
      }}
    >
      <Typography
        gutterBottom
        sx={{
          mb: '2rem',
          fontSize: '3rem',
          lineHeight: '1.31',
          letterSpacing: '.5px',
        }}
      >
        How Can We Help?
      </Typography>
      <Typography variant="h5" gutterBottom sx={{ mb: '1.5rem' }}>
        Monday - Friday: 9:00 - 17:00 GMT
      </Typography>
      <Typography variant="h6" gutterBottom>
        Send us a message:
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ mb: '1.5rem' }}>
        help@allbirds.org.eu
      </Typography>
      <CustomButton
        link="#"
        text="Get In Touch"
        $buttonWidth="260px"
      />
      <Box sx={{ display: 'flex', my: '5rem' }}>
        <Typography gutterBottom sx={{ mr: '2rem' }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Ducimus tempora natus blanditiis modi accusantium nesciunt obcaecati non sunt.
          Delectus tempore atque corporis eveniet, quibusdam asperiores distinctio.
          Reiciendis amet blanditiis corporis consequatur perferendis in,
          velit nulla fugit natus sunt aut distinctio officia error deserunt ullam
          quos earum ut inventore enim quo sint obcaecati dolorum.
          Velit ratione vel maxime animi quod sunt soluta repellat nihil consequuntur fugit.
          Culpa et, sit aliquam itaque pariatur cumque qui in
          magnam tempore ad, est minus natus quasi quidem perferendis rem
          hic amet illo ullam dignissimos. Tenetur aspernatur impedit nostrum
          iste architecto commodi animi! Ratione voluptatem suscipit asperiores.
          Ea animi nobis deleniti sequi sint exercitationem neque quis excepturi repellat expedita?
        </Typography>
        <Typography gutterBottom>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Porro aliquam sed consequatur corporis impedit quia cumque omnis iusto quas.
          Dolor labore fugiat commodi nemo, error veritatis recusandae accusantium
          explicabo exercitationem numquam, maiores perspiciatis soluta nam ut?
          Ipsum nemo eaque, sed vitae quia xercitationem minima doloremque repudiandae
          ab assumenda saepe quo suscipit aliquam, voluptatibus iusto obcaecati atque
          tenetur aspernatur impedit nostrum iste architecto commodi animi!
          Ratione voluptatem suscipit asperiores commodi eos quibusdam aliquam?
          Incidunt suscipit doloremque tempore iusto optio, adipisci expedita
          hic asperiores ducimus similique ab laboriosam ipsa voluptatem illum
          unde sit non facilis dolorem consequuntur reiciendis sunt quis? Veniam, repellat ad!
        </Typography>
      </Box>
    </Container>
  );
}

export default About;
