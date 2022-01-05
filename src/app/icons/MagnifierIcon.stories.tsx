import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import MagnifierIcon from "./MagnifierIcon";

export default {
    component: MagnifierIcon
} as ComponentMeta<typeof MagnifierIcon>

const Template: ComponentStory<typeof MagnifierIcon> = () => <MagnifierIcon />;
export const MagnifierIconStory = Template.bind({});
MagnifierIconStory.args = {}