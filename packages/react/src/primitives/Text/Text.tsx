import * as React from 'react';
import classNames from 'classnames';

import { ComponentClassNames } from '../shared/constants';
import { TextProps, Primitive } from '../types';
import { View } from '../View';

const TextPrimitive: Primitive<TextProps, 'p'> = (
  { as = 'p', className, children, isTruncated, variation, ...rest },
  ref
) => {
  variation = variation || 'default';
  return (
    <View
      as={as}
      className={classNames(
        ComponentClassNames.Text,
        `${ComponentClassNames.Text}-variation-${variation}`,
        className
      )}
      data-truncate={isTruncated}
      data-variation={variation}
      ref={ref}
      {...rest}
    >
      {children}
    </View>
  );
};

export const Text = React.forwardRef(TextPrimitive);

Text.displayName = 'Text';
