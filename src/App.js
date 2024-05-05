import React from "react";
import "./App.css";
import { Credits } from "./components/Credits/Credits";
import { Button } from "./components/Button/Button";
import { StarIcon } from "./components/StarIcon/StarIcon";

function App() {
  return (
    <div className="flex flex-col gap-12">
      <div className="max-w-full flex flex-wrap gap-5">
        <Button
          type="primary"
          size="medium"
          iconBefore={<StarIcon />}
          iconAfter={<StarIcon />}
          to="/"
          disabled={true}
        >
          Medium
        </Button>
        <Button
          type="primary"
          size="large"
          iconBefore={<StarIcon />}
          iconAfter={<StarIcon />}
          to="/"
        >
          Large
        </Button>
        <Button
          type="primary"
          size="extra-large"
          iconBefore={<StarIcon />}
          iconAfter={<StarIcon />}
          to="/"
        >
          Extra large
        </Button>
        <Button
          type="primary"
          size="extra-large-2"
          iconBefore={<StarIcon />}
          iconAfter={<StarIcon />}
          to="/"
        >
          2 Extra large
        </Button>
        <Button
          type="primary"
          size="medium"
          iconCenter={<StarIcon />}
          to="/"
          iconOnly={true}
        />
        <Button
          type="primary"
          size="large"
          iconCenter={<StarIcon />}
          to="/"
          iconOnly={true}
        />
        <Button
          type="primary"
          size="extra-large"
          iconCenter={<StarIcon />}
          to="/"
          iconOnly={true}
        />
        <Button
          type="primary"
          size="extra-large-2"
          iconCenter={<StarIcon />}
          to="/"
          iconOnly={true}
        />
      </div>
      <div className="max-w-full flex flex-wrap gap-5">
        <Button
          type="secondary"
          size="medium"
          iconBefore={<StarIcon />}
          iconAfter={<StarIcon />}
          to="/"
          disabled={true}
        >
          Medium
        </Button>
        <Button
          type="secondary"
          size="large"
          iconColor="#171717"
          iconBefore={<StarIcon />}
          iconAfter={<StarIcon />}
          to="/"
        >
          Large
        </Button>
        <Button
          type="secondary"
          size="extra-large"
          iconColor="#171717"
          iconBefore={<StarIcon />}
          iconAfter={<StarIcon />}
          to="/"
        >
          Extra large
        </Button>
        <Button
          type="secondary"
          size="extra-large-2"
          iconColor="#171717"
          iconBefore={<StarIcon />}
          iconAfter={<StarIcon />}
          to="/"
        >
          2 Extra large
        </Button>
        <Button
          type="secondary"
          size="medium"
          iconColor="#171717"
          iconCenter={<StarIcon />}
          to="/"
          iconOnly={true}
        />
        <Button
          type="secondary"
          size="large"
          iconColor="#171717"
          iconCenter={<StarIcon />}
          to="/"
          iconOnly={true}
        />
        <Button
          type="secondary"
          size="extra-large"
          iconColor="#171717"
          iconCenter={<StarIcon />}
          to="/"
          iconOnly={true}
        />
        <Button
          type="secondary"
          size="extra-large-2"
          iconColor="#171717"
          iconCenter={<StarIcon />}
          to="/"
          iconOnly={true}
        />
      </div>
      <Credits />
    </div>
  );
}

export default App;
