import React from 'react';
import {
  Introduce, Skill, Career, Project,
} from '../Components';
import { MainContainer } from './styles';

export default () => (
  <MainContainer>
    <Introduce />
    <Skill />
    <Career />
    <Project />
  </MainContainer>
);
