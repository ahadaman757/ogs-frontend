const HeroSec = () => {
  return (
    <>
      <div>
        <div>
          <h1>Find Your Next Dream Job</h1>
          <p>Easiest way to find a perfect job</p>
        </div>
        <div>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              aria-label="Text input with dropdown button"
            />
            <button
              class="btn btn-outline-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
          <div class="btn-group" role="group">
            <button
              type="button"
              class="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Dropdown link
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Dropdown link
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};
export default HeroSec;
