export interface ModalPropsTypes {
    openModal: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    filtros: string[];
    setFiltros: (value: any) => void;
    filtrarAction: (filtros: string[]) => void;
    limpiarAction: () => void;
}