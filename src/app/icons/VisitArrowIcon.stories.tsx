import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import VisitArrowIcon from "./VisitArrowIcon";

export default {
    component: VisitArrowIcon
} as ComponentMeta<typeof VisitArrowIcon>

const Template: ComponentStory<typeof VisitArrowIcon> = () => <VisitArrowIcon />;
export const VisitArrowIconStory = Template.bind({});
VisitArrowIconStory.args = {}