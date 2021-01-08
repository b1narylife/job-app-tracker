import useDarkMode from 'use-dark-mode';

const Header = () => {
  const darkMode = useDarkMode(false);

  return (
    <header className="py-3 shadow-2xl">
      <div className="container flex flex-row items-center justify-between mx-auto px-3 lg:px-0">
        <div className="branding flex flex-row items-center">
          <a href="/">
            <h1>Job Application Tracker</h1>
          </a>
        </div>

        <div className="flex flex-row items-center">
          <div className="user mx-3">👤</div>
          <div className="settings mx-3">⚙️</div>
          <div className="dark-mode mx-3">
            {darkMode.value ? (
              <button type="button" onClick={darkMode.disable}>
                <span role="image">☀️</span>
              </button>
            ) : (
              <button type="button" onClick={darkMode.enable}>
                <span role="image">🕶</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
