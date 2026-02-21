export type ModalProps = {
  title?: React.ReactNode;
  content: React.ReactNode;
  footerActions?: React.ReactNode[];
  isOpen: boolean;
  onClose: () => void;
};
