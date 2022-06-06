import { 
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin 
} from 'react-icons/ai';
import { Container } from './styles';

function Footer() {
  function handleRendering(url: string) {
    window.open(url);
  }

function handleScrollTop() {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  })
}

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>Voltar ao topo</button>
        <section>
          <AiOutlineTwitter 
            onClick={() => handleRendering('https://twitter.com/')}
            />
          <AiOutlineGithub
            onClick={() => handleRendering('https://github.com/')}
            />
          <AiFillLinkedin
            onClick={() => handleRendering('https://linkedin.com')}
            />
        </section>
      </div>
    </Container>
  );
};

export default Footer;