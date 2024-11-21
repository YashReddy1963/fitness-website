import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export function FeatureCard({ color, background, title, description }) {
  return (
    <Card className="rounded-lg p-16 shadow-lg shadow-gray-500/10"
    style={{
      backgroundImage:`url(${background})`,
      backgroundSize:"cover",
      backgroundPosition: "center"
    }}>
      <CardBody className="px-9 text-center">
        <Typography variant="h5" className="mb-2 font-extrabold" color="white">
          {title}
        </Typography>
        <Typography className="font-normal text-white">
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}

FeatureCard.defaultProps = {
  color: "blue",
};

FeatureCard.propTypes = {
  color: PropTypes.oneOf([
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
};

FeatureCard.displayName = "/src/widgets/layout/feature-card.jsx";

export default FeatureCard;
