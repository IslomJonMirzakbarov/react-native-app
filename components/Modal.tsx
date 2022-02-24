import React, { FunctionComponent, ReactNode, useState } from "react";
import { View, Modal as DefaultModal, Text, StyleSheet } from "react-native";
import PressableText from "./styled/PressableText";

type ModalProps = {
  activator?: FunctionComponent<{
    handleOpen: () => void;
  }>;
  children: FunctionComponent<{
    handleOpen: () => void;
    handleClose: () => void;
  }>;
};

const Modal = ({ activator: Activator, children }: ModalProps) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpen = () => setModalVisible(true);
  const handleClose = () => setModalVisible(false);
  return (
    <View>
      <DefaultModal
        visible={isModalVisible}
        transparent={false}
        animationType="fade"
      >
        <View style={styles.centeredView}>
          <View style={styles.contentView}>
            {children({ handleOpen, handleClose })}
          </View>
          <PressableText onPress={handleClose} text="close" />
        </View>
      </DefaultModal>
      {Activator ? (
        <Activator handleOpen={handleOpen} />
      ) : (
        <PressableText onPress={handleOpen} text="modal working" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    fontFamily: "montserrat-bold",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentView: {
    marginBottom: 20,
  },
});

export default Modal;
