// components/common/TextField.tsx
import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface TextFieldProps extends TextInputProps {
  icon?: string;
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
}

const TextField: React.FC<TextFieldProps> = ({ icon, label, placeholder, value, onChangeText, ...props }) => {
  return (
    <View className="mb-6">
      {label && <Text className="text-gray-700 mb-2">{label}</Text>}
      <View className="flex-row items-center border-b border-gray-300 pb-2">
        {icon && <FontAwesome name={icon} size={20} color="#555" className="mr-2" />}
        <TextInput
          className="flex-1 h-12 text-lg text-gray-700"
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          {...props}
        />
      </View>
    </View>
  );
};

export default TextField;
