import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function Modal() {
  return (
    <div>
      <header className="flex items-center justify-between">
        <h1>Modal title</h1>

        <FontAwesomeIcon icon={faX} />
      </header>
      <main>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
          obcaecati quibusdam quam perspiciatis veritatis, mollitia debitis
          delectus, vel nobis vero quisquam placeat quae voluptates vitae odio
          repudiandae harum unde numquam?
        </p>
      </main>
      <footer>
        <button>close</button>
        <button>save changes</button>
      </footer>
    </div>
  );
}
