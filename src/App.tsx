import { useState } from "react";
import TypeWriter from "./components/TypeWriter";
import Section from "./components/Section";

function App() {
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <button
          onClick={() => setIsDark(!isDark)}
          className={`fixed top-4 right-4 p-2 rounded-full ${
            isDark ? "bg-yellow-100" : "bg-gray-800"
          }`}
        >
          {isDark ? "☀️" : "🌙"}
        </button>

        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <TypeWriter text="Hello, I'm Adil Prima" />
          </h1>
          <p className="text-xl">Full Stack Developer</p>
        </header>

        <Section title="About Me">
          <p>
            I'm a passionate developer who loves building web applications with
            modern technologies.
          </p>
        </Section>

        <Section title="Tech Stack">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-opacity-20 bg-blue-500 rounded">React</div>
            <div className="p-4 bg-opacity-20 bg-blue-600 rounded">
              TypeScript
            </div>
            <div className="p-4 bg-opacity-20 bg-yellow-500 rounded">
              JavaScript
            </div>
            <div className="p-4 bg-opacity-20 bg-green-500 rounded">
              Node.js
            </div>
            <div className="p-4 bg-opacity-20 bg-gray-500 rounded">Express</div>
            <div className="p-4 bg-opacity-20 bg-blue-400 rounded">
              Tailwind CSS
            </div>
            <div className="p-4 bg-opacity-20 bg-blue-500 rounded">CSS</div>
            <div className="p-4 bg-opacity-20 bg-red-500 rounded">HTML</div>
          </div>
        </Section>

        <Section title="Contact">
          <p className="text-lg">
            Email: adil@example.com
            <br />
            GitHub: @adiruPrima
          </p>
        </Section>
      </div>
    </div>
  );
}

export default App;
