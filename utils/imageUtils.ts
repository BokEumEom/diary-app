// utils/imageUtils.ts
import { Image } from "react-native";
import { Asset } from "expo-asset";
import * as ImageManipulator from "expo-image-manipulator";

interface Size {
  width: number;
  height: number;
}

export const getSize = (uri: string): Promise<Size> =>
  new Promise((resolve, reject) => 
    Image.getSize(uri, (width, height) => resolve({ width, height }), reject)
  );

export const loadImages = async (screens: any[]) => {
  const edits = screens.map(async (screen) => {
    const image = Asset.fromModule(screen);
    await image.downloadAsync();
    const { localUri } = image;
    const { width, height } = await getSize(localUri!);
    const crop1 = { crop: { originX: 0, originY: 0, width, height: height / 2 } };
    const crop2 = { crop: { originX: 0, originY: height / 2, width, height: height / 2 } };
    const { uri: top } = await ImageManipulator.manipulateAsync(localUri!, [crop1]);
    const { uri: bottom } = await ImageManipulator.manipulateAsync(localUri!, [crop2]);
    return { top, bottom };
  });

  return Promise.all(edits);
};
