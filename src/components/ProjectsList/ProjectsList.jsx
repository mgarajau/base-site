import './ProjectsList.css'

// Assets
import LikePreenchido from '../../assets/like-preenchido.svg'
import LikeVazio from '../../assets/like.svg'

function ProjectsList(props) {
  return (
    <div className="projects-section">
      <div className="projects-hero">
        <h1>Follow Our Projects</h1>
        <p>It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.</p>
      </div>

      <div className="projects-grid">
        {/* Card 1 */}
        <div className="projects-card d-flex jc-center al-center fd-column">
          <div className="thumb tertiary-background"></div>
          <h3>João Silva</h3>
          <p>BH, Brasil</p>
          <img src={LikePreenchido} height="24px" alt="Like" />
        </div>

        {/* Card 2 */}
        <div className="projects-card d-flex jc-center al-center fd-column">
          <div className="thumb tertiary-background"></div>
          <h3>João Silva</h3>
          <p>BH, Brasil</p>
          <img src={LikeVazio} height="24px" alt="Like" />
        </div>

        {/* Card 3 */}
        <div className="projects-card d-flex jc-center al-center fd-column">
          <div className="thumb tertiary-background"></div>
          <h3>João Silva</h3>
          <p>BH, Brasil</p>
          <img src={LikePreenchido} height="24px" alt="Like" />
        </div>

        {/* Card 4 */}
        <div className="projects-card d-flex jc-center al-center fd-column">
          <div className="thumb tertiary-background"></div>
          <h3>João Silva</h3>
          <p>BH, Brasil</p>
          <img src={LikePreenchido} height="24px" alt="Like" />
        </div>

        {/* Card 5 */}
        <div className="projects-card d-flex jc-center al-center fd-column">
          <div className="thumb tertiary-background"></div>
          <h3>João Silva</h3>
          <p>BH, Brasil</p>
          <img src={LikePreenchido} height="24px" alt="Like" />
        </div>

        {/* Card 6 */}
        <div className="projects-card d-flex jc-center al-center fd-column">
          <div className="thumb tertiary-background"></div>
          <h3>João Silva</h3>
          <p>BH, Brasil</p>
          <img src={LikePreenchido} height="24px" alt="Like" />
        </div>

        {/* Card 7 */}
        <div className="projects-card d-flex jc-center al-center fd-column">
          <div className="thumb tertiary-background"></div>
          <h3>João Silva</h3>
          <p>BH, Brasil</p>
          <img src={LikePreenchido} height="24px" alt="Like" />
        </div>

        {/* Card 8 */}
        <div className="projects-card d-flex jc-center al-center fd-column">
          <div className="thumb tertiary-background"></div>
          <h3>João Silva</h3>
          <p>BH, Brasil</p>
          <img src={LikePreenchido} height="24px" alt="Like" />
        </div>
      </div>
    </div>
  )
}

export default ProjectsList