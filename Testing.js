import React, { ReactNode } from "react";


// basic button
// reactnode: boolean, null/undef, number, string, react element(jsx), array of the above (or nested)
// it's a typescript type annotation here
const Button = ({ children }) => {
  // : { children: ReactNode }
  return (
    <button>
      <SomeIcon size="small" color="red" />
      {children}
    </button>
  );
};

// Now we give people the ability to change the icon so we introduce iconName prop:
const getIconFromName = (iconName) => {
  switch (iconName) {
    case 'cross':
      return <CrossIcon size="small" color="red" />;
    case 'star':
      return <StarIcon size="small" color="blue" />
    // all other supported icons
  }
}
const Button = ({ children, iconName }) => {
  // : { children: ReactNode, iconName: Icons })
  const icon = getIconFromName(name);

  return <button>
    {icon}
    {children}
  </button>
}