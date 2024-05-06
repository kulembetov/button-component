import React from "react";
import "./App.css";
import { Credits } from "components/Credits/Credits";
import { Button } from "components/Button/Button";
import { StarIcon } from "components/StarIcon/StarIcon";

const App = () => {
  return (
    <div className="flex flex-col gap-12 mt-[7rem] mb-[7rem]">
      <div className="max-w-full flex flex-wrap gap-5 items-center justify-center">
        <Button type="primary" size="large" to="/">
          Button CTA
        </Button>
        <Button
          type="primary"
          size="extra-large"
          iconBefore={<StarIcon />}
          to="/"
        >
          Button CTA
        </Button>
        <Button
          type="primary"
          size="extra-large-2"
          iconAfter={<StarIcon />}
          to="/"
        >
          Button CTA
        </Button>
        <Button
          type="primary"
          size="extra-large-2"
          iconCenter={<StarIcon />}
          to="/"
          isIconOnly={true}
        />
      </div>

      <div className="max-w-full flex flex-wrap gap-5 items-center">
        <Button type="secondary" size="large" iconColor="#171717" to="/">
          Button CTA
        </Button>
        <Button
          type="secondary"
          size="extra-large"
          iconColor="#171717"
          iconBefore={<StarIcon />}
          to="/"
        >
          Button CTA
        </Button>
        <Button
          type="secondary"
          size="extra-large-2"
          iconColor="#171717"
          iconAfter={<StarIcon />}
          to="/"
        >
          Button CTA
        </Button>
        <Button
          type="secondary"
          size="extra-large-2"
          iconColor="#171717"
          iconCenter={<StarIcon />}
          to="/"
          isIconOnly={true}
        />
      </div>

      <div className="max-w-full flex flex-wrap gap-5 items-center">
        <Button type="tertiary" size="large" iconColor="#4338CA" to="/">
          Button CTA
        </Button>
        <Button
          type="tertiary"
          size="extra-large"
          iconColor="#4338CA"
          iconBefore={<StarIcon />}
          to="/"
        >
          Button CTA
        </Button>
        <Button
          type="tertiary"
          size="extra-large-2"
          iconColor="#4338CA"
          iconAfter={<StarIcon />}
          to="/"
        >
          Button CTA
        </Button>
        <Button
          type="tertiary"
          size="extra-large-2"
          iconColor="#4338CA"
          iconCenter={<StarIcon />}
          to="/"
          isIconOnly={true}
        />
      </div>

      <div className="max-w-full flex flex-wrap gap-5 items-center">
        <Button
          type="link-color"
          size="medium"
          iconColor="#4338CA"
          hoverColor="#3730A3"
          to="/"
        >
          Button CTA
        </Button>
        <Button
          type="link-color"
          size="large"
          iconColor="#4338CA"
          hoverColor="#3730A3"
          iconBefore={<StarIcon />}
          to="/"
        >
          Button CTA
        </Button>
        <Button
          type="link-color"
          size="extra-large"
          iconColor="#4338CA"
          hoverColor="#3730A3"
          iconAfter={<StarIcon />}
          to="/"
        >
          Button CTA
        </Button>
        <Button
          type="link-color"
          size="extra-large-2"
          iconColor="#4338CA"
          hoverColor="#3730A3"
          iconCenter={<StarIcon />}
          to="/"
          isIconOnly={true}
        >
          Button CTA
        </Button>
      </div>

      <div className="max-w-full flex flex-wrap gap-5 items-center">
        <Button
          type="link-gray"
          size="large"
          iconColor="#525252"
          hoverColor="#171717"
          to="/"
        >
          Button CTA
        </Button>
        <Button
          type="link-gray"
          size="extra-large"
          iconColor="#525252"
          hoverColor="#171717"
          iconBefore={<StarIcon />}
          to="/"
        >
          Button CTA
        </Button>
        <Button
          type="link-gray"
          size="extra-large-2"
          iconColor="#525252"
          hoverColor="#171717"
          iconAfter={<StarIcon />}
          to="/"
        >
          Button CTA
        </Button>
        <Button
          type="link-gray"
          size="extra-large-2"
          iconColor="#525252"
          hoverColor="#171717"
          iconCenter={<StarIcon />}
          to="/"
          isIconOnly={true}
        >
          Button CTA
        </Button>
      </div>

      <div className="max-w-full flex flex-wrap gap-5 items-center">
        <Button type="destructive" size="large" iconColor="#fff" to="/">
          Button CTA
        </Button>
        <Button
          type="destructive"
          size="extra-large"
          iconColor="#fff"
          iconBefore={<StarIcon />}
          to="/"
        >
          Button CTA
        </Button>
        <Button
          type="destructive"
          size="extra-large-2"
          iconColor="#fff"
          iconAfter={<StarIcon />}
          to="/"
        >
          Button CTA
        </Button>
        <Button
          type="destructive"
          size="extra-large-2"
          iconColor="#fff"
          iconCenter={<StarIcon />}
          to="/"
          isIconOnly={true}
        />
      </div>
      <Credits />
    </div>
  );
};

export default App;
