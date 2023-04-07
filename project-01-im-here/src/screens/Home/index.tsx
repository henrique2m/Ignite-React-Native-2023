import { useState } from "react";
import {
  Alert,
  AlertButton,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

const EmptyFlatListText = () => (
  <Text style={styles.listEmptyText}>
    Ninguém chegou no evento ainda? Adicione participantes a sua lista de
    presença.
  </Text>
);

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  const handleParticipantAdd = () => {
    const hasParticipant = participants.includes(participantName);
    if (hasParticipant) {
      return Alert.alert(
        "Erro Participante",
        "Já existe uma participante com esse nome."
      );
    }

    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName("");
  };

  const handleParticipantConfirmRemove = (name: string) => {
    const accept = { text: "Sim", onPress: () => removeParticipant(name) };
    const deny: AlertButton = { text: "Não", style: "cancel" };
    const message = ` Deseja excluir o participante ${name}`;

    Alert.alert("Remover Participante", message, [accept, deny]);
  };

  const removeParticipant = (name: string) => {
    setParticipants((prevState) =>
      prevState.filter((participant) => participant !== name)
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Mar, 4 de Novembro</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantConfirmRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<EmptyFlatListText />}
      />
    </View>
  );
}
