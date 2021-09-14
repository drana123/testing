import React from 'react';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { Greeter } from "./Greeter";

// describe('Greeter Test', () => {
//     test('renders App component', () => {
//       render(<Greeter message={"Hello buddy"}/>);
//       screen.debug ();
//       expect(screen.getByText('Hello buddy')).toBeInTheDocument();
      
//     });
//   });

  describe('testsuite', () => {
    test('renders App component', () => {
        render(<h1> "Hello buddy" </h1>);
        screen.debug();
        // expect(screen.getByText('Hello buddy')).toBeInTheDocument();
        
      });
});