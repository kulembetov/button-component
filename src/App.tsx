import React from "react";
import "./App.css";
import { Credits } from "./components/Credits/Credits";
import { Button } from "./components/Button/Button";
import { StarIcon } from "./components/StarIcon/StarIcon";

const App = () => {
  return (
    <div className="flex flex-col gap-12 mt-[7rem] mb-[7rem]">
      <div className="max-w-full flex flex-wrap gap-5 items-center">
        <Button
          type="primary"
          size="medium"
          iconBefore={<StarIcon />}
          iconAfter={<StarIcon />}
          to="/"
          disabled={true}
        >
          Disabled
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

      <div className="max-w-full flex flex-wrap gap-5 items-center">
        <Button
          type="secondary"
          size="medium"
          iconBefore={<StarIcon />}
          iconAfter={<StarIcon />}
          to="/"
          disabled={true}
        >
          Disabled
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

      <div className="max-w-full flex flex-wrap gap-5 items-center">
        <Button
          type="tertiary"
          size="medium"
          iconBefore={<StarIcon />}
          iconAfter={<StarIcon />}
          to="/"
          disabled={true}
        >
          Disabled
        </Button>
        <Button
          type="tertiary"
          size="large"
          iconColor="#4338CA"
          iconBefore={<StarIcon />}
          iconAfter={<StarIcon />}
          to="/"
        >
          Large
        </Button>
        <Button
          type="tertiary"
          size="extra-large"
          iconColor="#4338CA"
          iconBefore={<StarIcon />}
          iconAfter={<StarIcon />}
          to="/"
        >
          Extra large
        </Button>
        <Button
          type="tertiary"
          size="extra-large-2"
          iconColor="#4338CA"
          iconBefore={<StarIcon />}
          iconAfter={<StarIcon />}
          to="/"
        >
          2 Extra large
        </Button>
        <Button
          type="tertiary"
          size="medium"
          iconColor="#4338CA"
          iconCenter={<StarIcon />}
          to="/"
          iconOnly={true}
        />
        <Button
          type="tertiary"
          size="large"
          iconColor="#4338CA"
          iconCenter={<StarIcon />}
          to="/"
          iconOnly={true}
        />
        <Button
          type="tertiary"
          size="extra-large"
          iconColor="#4338CA"
          iconCenter={<StarIcon />}
          to="/"
          iconOnly={true}
        />
        <Button
          type="tertiary"
          size="extra-large-2"
          iconColor="#4338CA"
          iconCenter={<StarIcon />}
          to="/"
          iconOnly={true}
        />
      </div>

      <div className="max-w-full flex flex-wrap gap-5 items-center">
        <Button
          type="link-color"
          size="medium"
          iconBefore={<StarIcon />}
          iconAfter={<StarIcon />}
          to="/"
          disabled={true}
        >
          Disabled
        </Button>
        <Button
          type="link-color"
          size="large"
          iconColor="#4338CA"
          hoverColor="#3730A3"
          iconBefore={<StarIcon />}
          iconAfter={<StarIcon />}
          to="/"
        >
          Large
        </Button>
        <Button
          type="link-color"
          size="extra-large"
          iconColor="#4338CA"
          hoverColor="#3730A3"
          iconBefore={<StarIcon />}
          iconAfter={<StarIcon />}
          to="/"
        >
          Extra large
        </Button>
        <Button
          type="link-color"
          size="extra-large-2"
          iconColor="#4338CA"
          hoverColor="#3730A3"
          iconBefore={<StarIcon />}
          iconAfter={<StarIcon />}
          to="/"
        >
          2 Extra large
        </Button>
      </div>

      <div className="max-w-full flex flex-wrap gap-5 items-center">
        <Button
          type="link-gray"
          size="medium"
          iconBefore={<StarIcon />}
          iconAfter={<StarIcon />}
          to="/"
          disabled={true}
        >
          Disabled
        </Button>
        <Button
          type="link-gray"
          size="large"
          iconColor="#525252"
          hoverColor="#171717"
          iconBefore={<StarIcon />}
          iconAfter={<StarIcon />}
          to="/"
        >
          Large
        </Button>
        <Button
          type="link-gray"
          size="extra-large"
          iconColor="#525252"
          hoverColor="#171717"
          iconBefore={<StarIcon />}
          iconAfter={<StarIcon />}
          to="/"
        >
          Extra large
        </Button>
        <Button
          type="link-gray"
          size="extra-large-2"
          iconColor="#525252"
          hoverColor="#171717"
          iconBefore={<StarIcon />}
          iconAfter={<StarIcon />}
          to="/"
        >
          2 Extra large
        </Button>
      </div>

      <div className="max-w-full flex flex-wrap gap-5 items-center">
        <Button
          type="destructive"
          size="medium"
          iconBefore={<StarIcon />}
          iconAfter={<StarIcon />}
          to="/"
          disabled={true}
        >
          Disabled
        </Button>
        <Button
          type="destructive"
          size="large"
          iconColor="#fff"
          iconBefore={<StarIcon />}
          iconAfter={<StarIcon />}
          to="/"
        >
          Large
        </Button>
        <Button
          type="destructive"
          size="extra-large"
          iconColor="#fff"
          iconBefore={<StarIcon />}
          iconAfter={<StarIcon />}
          to="/"
        >
          Extra large
        </Button>
        <Button
          type="destructive"
          size="extra-large-2"
          iconColor="#fff"
          iconBefore={<StarIcon />}
          iconAfter={<StarIcon />}
          to="/"
        >
          2 Extra large
        </Button>
        <Button
          type="destructive"
          size="medium"
          iconColor="#fff"
          iconCenter={<StarIcon />}
          to="/"
          iconOnly={true}
        />
        <Button
          type="destructive"
          size="large"
          iconColor="#fff"
          iconCenter={<StarIcon />}
          to="/"
          iconOnly={true}
        />
        <Button
          type="destructive"
          size="extra-large"
          iconColor="#fff"
          iconCenter={<StarIcon />}
          to="/"
          iconOnly={true}
        />
        <Button
          type="destructive"
          size="extra-large-2"
          iconColor="#fff"
          iconCenter={<StarIcon />}
          to="/"
          iconOnly={true}
        />
      </div>
      <Credits />
    </div>
  );
};

export default App;
