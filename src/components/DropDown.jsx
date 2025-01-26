import React from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Button,
} from "@headlessui/react";

const DropDown = ({ options = [], onClick = null, button, className = "" }) => {
  return (
    <Menu>
      <MenuButton onClick={onClick} className={`${className}`}>
        {button}
      </MenuButton>

      <MenuItems
        transition
        anchor="bottom end"
        className="w-fit origin-top-right rounded-xl border border-white/5 bg-denim p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        {options.map((value) => (
          <MenuItem key={value.name}>
            <Button
              className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-congressBlue"
              onClick={value.onClick}
            >
              {value.icon && <value.icon aria-hidden="true" />}
              <span>{value.name}</span>
            </Button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

export default DropDown;
