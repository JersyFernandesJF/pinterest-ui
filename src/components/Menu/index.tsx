import { forwardRef } from "react";
import { View, Text } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { FontAwesome } from "@expo/vector-icons";

import { MenuProps } from "./menu";
import { styles } from "./styles";
import { theme } from "@/theme";
import { MenuButton } from "@/components/MenuButton";

export const Menu = forwardRef<BottomSheet, MenuProps>(({ onClose }, ref) => {
  return (
    <BottomSheet
      ref={ref}
      index={0}
      snapPoints={[0.01, 230]}
      backgroundStyle={styles.container}
      handleComponent={() => null}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <FontAwesome
            name="close"
            size={24}
            onPress={onClose}
            color={theme.colors.white}
          />
          <Text style={styles.tittle}>Comece a criar agora</Text>
        </View>
        <View style={styles.options}>
          <MenuButton title="Pin" icon="home" />
          <MenuButton title="Colagem" icon="paste" />
          <MenuButton title="Pasta" icon="folder" />
        </View>
      </View>
    </BottomSheet>
  );
});
