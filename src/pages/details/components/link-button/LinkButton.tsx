import { ReactNode } from "react";
import { Link } from "react-router-dom";

import "./link-button.css";

export const LinkButton = ({
  children,
  to,
  state,
  className,
}: {
  children: ReactNode;
  to: string;
  state?: string;
  className?: string;
}) => {
  return (
    <Link {...{ state, to }}>
      <div className={`linkButton ${className}`}>{children}</div>
    </Link>
  );
};
