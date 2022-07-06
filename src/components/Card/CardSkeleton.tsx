import React from "react";
import ContentLoader from "react-content-loader";

const CardSkeleton: React.FC = (props) => (
  <ContentLoader
    speed={1}
    width={280}
    height={420}
    viewBox="0 0 280 420"
    backgroundColor="#f0f0f0"
    foregroundColor="#e6e6e6"
    {...props}>
    <rect x="10" y="28" rx="10" ry="10" width="260" height="233" />
    <rect x="10" y="273" rx="10" ry="10" width="180" height="25" />
    <rect x="10" y="325" rx="10" ry="10" width="80" height="40" />
    <rect x="10" y="375" rx="10" ry="10" width="260" height="40" />
    <rect x="10" y="305" rx="5" ry="5" width="200" height="10" />
    <rect x="100" y="325" rx="10" ry="10" width="80" height="40" />
    <rect x="190" y="325" rx="10" ry="10" width="80" height="40" />
</ContentLoader>
);

export default CardSkeleton;
