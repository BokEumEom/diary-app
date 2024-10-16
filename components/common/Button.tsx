// components/common/Button.tsx
import React, { forwardRef } from 'react';
import { Pressable, Text, PressableProps, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface ButtonProps extends PressableProps {
  title: string;
  buttonClassName?: string;
  textClassName?: string;
  icon?: string;
}

const Button = forwardRef<View, ButtonProps>(({ title, buttonClassName, textClassName, icon, ...props }, ref) => {
  return (
    <Pressable ref={ref} className={`flex-row items-center justify-center p-4 rounded-full ${buttonClassName}`} {...props}>
      <Text className={`text-white text-lg ${textClassName}`}>{title}</Text>
      {icon && <FontAwesome name={icon} size={24} color="white" className="ml-2" />}
    </Pressable>
  );
});

Button.displayName = 'Button';

export default Button;
