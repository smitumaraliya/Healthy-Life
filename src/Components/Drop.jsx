// import { IoIosArrowDown } from "react-icons/io";
// import Container from "react-bootstrap/Container";
// import { NavLink } from "react-router-dom";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { useState } from "react";

const Dropdown1 = () => {

    const [open, setOpen] = useState(false)

    return (
        <ul className="flex h-52">
            <li>
                <Dropdown isOpen={open}>
                    <DropdownTrigger>
                        <Button
                            variant="bordered"
                            onMouseEnter={() => { setOpen(true) }}
                            onMouseLeave={() => { setOpen(false) }}
                        >
                            Open Menu
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                        <DropdownItem key="new">New file</DropdownItem>
                        <DropdownItem key="copy">Copy link</DropdownItem>
                        <DropdownItem key="edit">Edit file</DropdownItem>
                        <DropdownItem key="delete" className="text-danger" color="danger">
                            Delete file
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </li>
            <li>
                <Dropdown>
                    <DropdownTrigger>
                        <Button
                            variant="bordered"
                        >
                            Open Menu
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                        <DropdownItem key="new">New file</DropdownItem>
                        <DropdownItem key="copy">Copy link</DropdownItem>
                        <DropdownItem key="edit">Edit file</DropdownItem>
                        <DropdownItem key="delete" className="text-danger" color="danger">
                            Delete file
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </li>
        </ul>
    );
};

export default Dropdown1;