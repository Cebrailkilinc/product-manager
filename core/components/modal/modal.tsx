// src/components/Modal.tsx
import React, { ReactNode } from 'react';
import "./modal.scss";
import { modalStyles } from './modal.cva';
import { cn } from "@/packages/utils/cn";
import { Button } from '@/core/components/button'; // Button bileşenini import edin
import { X } from 'lucide-react';

interface ModalProps {
  children: ReactNode;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  variant?: 'info' | 'warning' | 'success' | 'error';
  className?: string;
  onClose: () => void;
  onAccept?: () => void; // Accept butonu için onAccept fonksiyonu
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ size, variant, className, children, onClose, onAccept, ...props }, ref) => (
    <div ref={ref} className={cn(modalStyles({ size, variant }), className)} {...props}>
      <X onClick={onClose} className="modal-close-button"/>
      {children}
      <div className="modal-footer">
        <Button size='small' onClick={onAccept} className="modal-accept-button">Accept</Button>
      </div>
    </div>
  )
);

Modal.displayName = 'Modal';

export { Modal };
