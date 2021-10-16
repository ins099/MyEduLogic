import { createNavigationContainerRef } from '@react-navigation/core';
import * as React from 'react';

export const navigationRef = createNavigationContainerRef()

export function navigate(name,params) {
  navigationRef.current.navigate(name,params);
}
