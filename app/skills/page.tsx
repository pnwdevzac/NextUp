'use client';
import { useState } from 'react';
import { Button, ButtonGroup } from "@nextui-org/react";

// Define your skills here
const skills: { [key: string]: string[] } = {
  "Programming Languages": ["C#", "Java", "Visual Basic", "HTML5", "CSS", "Javascript", "Typescript", "SQL/TSQL", "Python"],
  "Web Technologies": ["Websockets", "REST API’s", "XML", "AJAX", "JSON", "Web3"],
  "Frameworks": ["ASP.NET Core", ".NET", "MVC", "React", "Redux", "Next.js", "Next.UI", "Telerik", "GrapeCity AR", "Bootstrap", "Node.js"],
  "Cloud": ["Azure DevOps", "WebApps", "Testing","Pipelines", "Oracle"],
  "Methodologies": ["Git/Github", "Scrum", "Agile", "Pair Programming", "SOLID Principles"],
  "Tools": ["Visual Studio", "Visual Studio Code", "Eclipse", "NetBeans", "Intellij IDEA", "IIS"]
};

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState(Object.keys(skills)[0]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '3em', color: "violet" }}>Skills</h1>
      <br></br>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
  {Object.keys(skills).map((category, index) => (
    <Button
      key={category}
      size="sm"
      color={selectedCategory === category ? "success" : (index % 2 === 0 ? "primary" : "secondary")}
      onClick={() => setSelectedCategory(category)}
      style={{ margin: '5px' }} //additional margin as needed
    >
      {category}
    </Button>
  ))}
</div>

      <h2 style={{ fontSize: '2em', color: 'violet' }}>
        <strong>{selectedCategory}</strong>
      </h2>
      <div className="grid-container">
        {skills[selectedCategory].map((skill, index) => (
          <div key={skill} className="era-container">
            <h2 style={{ fontSize: '1.5em', color: index % 2 === 0 ? 'cyan' : 'violet' }}>
              <strong>{skill}</strong>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
