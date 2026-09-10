import React, { useState, useEffect, useMemo, useRef } from 'react';

const Icon = ({ name, className = "w-5 h-5", size, ...props }) => {
  const iconSize = size ? `w-${size} h-${size}` : className;
  
  switch (name) {
    case 'camera':
      return (
        <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case 'check-circle':
      return (
        <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'cloud-upload':
      return (
        <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      );
    case 'drive':
      return (
        <svg className={iconSize} viewBox="0 0 87.3 78" fill="currentColor" {...props}>
          <path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8H0c0 1.55.4 3.1 1.2 4.5l5.4 9.35z" fill="#0066DA"/>
          <path d="M43.65 25L29.9 1.2C28.5.4 26.95 0 25.4 0h-5.5c-1.55 0-3.1.4-4.5 1.2L1.65 25.1c-.8.8-1.4 1.95-1.45 3.1h27.75l15.7-23.2z" fill="#00AC47"/>
          <path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.2-2.1 5.4-9.35c.8-1.4 1.2-2.95 1.2-4.5H56.9l6.05 10.5 10.6 8.75z" fill="#EA4335"/>
          <path d="M43.65 25L27.95 52.2h59.35c0-1.55-.4-3.1-1.2-4.5L72.35 23.9c-.8-1.4-1.95-2.5-3.3-3.3H43.65z" fill="#2684FC"/>
          <path d="M73.55 76.8L59.8 53H27.5l13.75 23.8c1.4.8 2.95 1.2 4.5 1.2h23.3c1.55 0 3.1-.4 4.5-1.2z" fill="#00832D"/>
          <path d="M27.95 52.2L43.65 25H27.5L11.8 52.2h16.15z" fill="#FFBA00"/>
        </svg>
      );
    case 'plus':
      return (
        <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
        </svg>
      );
    case 'trash':
      return (
        <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      );
    case 'x':
      return (
        <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      );
    case 'eye':
      return (
        <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      );
    case 'folder':
      return (
        <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      );
    case 'download':
      return (
        <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      );
    case 'refresh':
      return (
        <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      );
    case 'store':
      return (
        <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m4 10V11m-4 0h4" />
        </svg>
      );
    case 'alert':
      return (
        <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      );
    default:
      return null;
  }
};

const DEFAULT_CATEGORIES = [
  {
    id: 'infraestrutura',
    title: 'Infraestrutura & Rede Geral',
    description: 'Fotos da fachada, equipamentos sem montagem e identificação de rede',
    items: [
      { id: 'fachada_loja', label: 'Fachada da loja', instruction: 'Foto frontal nítida da fachada da loja com o nome visível.' },
      { id: 'equip_antes_montagem', label: 'Foto dos equipamentos antes da montagem', instruction: 'Foto com todos os equipamentos organizados antes da instalação.' },
      { id: 'num_serie_equip', label: 'Números de Série (FortiAP - FortiGate - Switch)', instruction: 'Foto dos selos/etiquetas com os números de série (FortiAP, FortiGate e Switch).' }
    ]
  },
  {
    id: 'pdv_geral',
    title: 'Visão Geral PDV',
    description: 'Composição geral da área de checkout/frente de caixa',
    items: [
      { id: 'pdvs_visao_geral', label: 'PDV\'S Visão Geral parte frontal', instruction: 'Foto panorâmica pegando a frente de todos os caixas/PDVs.' }
    ]
  },
  {
    id: 'pdv_1',
    title: 'PDV 1',
    description: 'Checklist completo do Caixa 1',
    items: [
      { id: 'pdv1_gaveta', label: 'PDV 1 - Gaveta aberta', instruction: 'Foto mostrando a gaveta aberta e funcionando.' },
      { id: 'pdv1_cabos', label: 'PDV 1 - Organização dos cabos', instruction: 'Foto da organização técnica e chicote de cabos sob o balcão.' },
      { id: 'pdv1_frontal', label: 'PDV 1 - Parte frontal com tablet, pinpad e biometria', instruction: 'Foto frontal completa com tablet, pinpad e leitor biométrico posicionados.' }
    ]
  },
  {
    id: 'pdv_2',
    title: 'PDV 2',
    description: 'Checklist completo do Caixa 2',
    items: [
      { id: 'pdv2_gaveta', label: 'PDV 2 - Gaveta aberta', instruction: 'Foto mostrando a gaveta aberta e funcionando.' },
      { id: 'pdv2_cabos', label: 'PDV 2 - Organização dos cabos', instruction: 'Foto da organização técnica e chicote de cabos sob o balcão.' },
      { id: 'pdv2_frontal', label: 'PDV 2 - Parte frontal com tablet, pinpad e biometria', instruction: 'Foto frontal completa com tablet, pinpad e leitor biométrico posicionados.' }
    ]
  },
  {
    id: 'pdv_3',
    title: 'PDV 3',
    description: 'Checklist completo do Caixa 3',
    items: [
      { id: 'pdv3_gaveta', label: 'PDV 3 - Gaveta aberta', instruction: 'Foto mostrando a gaveta aberta e funcionando.' },
      { id: 'pdv3_cabos', label: 'PDV 3 - Organização dos cabos', instruction: 'Foto da organização técnica e chicote de cabos sob o balcão.' },
      { id: 'pdv3_frontal', label: 'PDV 3 - Parte frontal com tablet, pinpad e biometria', instruction: 'Foto frontal completa com tablet, pinpad e leitor biométrico posicionados.' }
    ]
  },
  {
    id: 'pdv_4',
    title: 'PDV 4',
    description: 'Checklist completo do Caixa 4',
    items: [
      { id: 'pdv4_gaveta', label: 'PDV 4 - Gaveta aberta', instruction: 'Foto mostrando a gaveta aberta e funcionando.' },
      { id: 'pdv4_cabos', label: 'PDV 4 - Organização dos cabos', instruction: 'Foto da organização técnica e chicote de cabos sob o balcão.' },
      { id: 'pdv4_frontal', label: 'PDV 4 - Parte frontal com tablet, pinpad e biometria', instruction: 'Foto frontal completa com tablet, pinpad e leitor biométrico posicionados.' }
    ]
  }
];

export default function App() {
  // Store / Installation info
  const [storeInfo, setStoreInfo] = useState(() => {
    const saved = localStorage.getItem('audit_store_info');
    return saved ? JSON.parse(saved) : {
      storeName: 'Loja Exemplo 102',
      storeCode: 'LJ-102',
      technicianName: 'João Silva',
      osNumber: 'OS-88421',
      date: new Date().toISOString().split('T')[0]
    };
  });

  // Custom Categories & Requirements state
  const [categories, setCategories] = useState(() => {
    const saved = localStorage.getItem('audit_categories');
    return saved ? JSON.parse(saved) : DEFAULT_CATEGORIES;
  });

  // Photo uploads mapped by itemId: { itemId, photoUrl, timestamp, notes, driveSyncStatus }
  const [photosMap, setPhotosMap] = useState(() => {
    const saved = localStorage.getItem('audit_photos_map');
    return saved ? JSON.parse(saved) : {};
  });

  // Google Drive Config state
  const [driveConfig, setDriveConfig] = useState(() => {
    const saved = localStorage.getItem('audit_drive_config');
    return saved ? JSON.parse(saved) : {
      folderName: 'Fotos_Instalacao_PDV',
      autoSync: true,
      googleAccount: 'tecnico.campo@empresa.com.br',
      driveFolderId: '1A2b3C4d5E6f7G8h9I0J'
    };
  });

  // UI Navigation & Modals
  const [activeTab, setActiveTab] = useState('checklist'); // 'checklist' | 'drive' | 'report'
  const [activePhotoModal, setActivePhotoModal] = useState(null); // { item, photo }
  const [showDriveModal, setShowDriveModal] = useState(false);
  const [showAddPdvModal, setShowAddPdvModal] = useState(false);
  const [newPdvNumber, setNewPdvNumber] = useState('');
  const [toastMessage, setToastMessage] = useState(null);
  const [isSyncingDrive, setIsSyncingDrive] = useState(false);

  // New Category & Subcategory Modals State
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
  const [newCategoryTitle, setNewCategoryTitle] = useState('');
  const [newCategoryDesc, setNewCategoryDesc] = useState('');

  const [showAddSubcategoryModal, setShowAddSubcategoryModal] = useState(false);
  const [targetCategoryId, setTargetCategoryId] = useState('');
  const [newSubLabel, setNewSubLabel] = useState('');
  const [newSubInstruction, setNewSubInstruction] = useState('');

  // Confirmation Modal State (Replaces native browser confirm/alert)
  const [confirmModal, setConfirmModal] = useState(null);

  // Hidden File input reference for dynamic trigger
  const fileInputRef = useRef(null);
  const [currentUploadItemId, setCurrentUploadItemId] = useState(null);

  // Save to LocalStorage
  useEffect(() => {
    localStorage.setItem('audit_store_info', JSON.stringify(storeInfo));
  }, [storeInfo]);

  useEffect(() => {
    localStorage.setItem('audit_categories', JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem('audit_photos_map', JSON.stringify(photosMap));
  }, [photosMap]);

  useEffect(() => {
    localStorage.setItem('audit_drive_config', JSON.stringify(driveConfig));
  }, [driveConfig]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const allItems = useMemo(() => {
    const items = [];
    categories.forEach(cat => {
      cat.items.forEach(item => {
        items.push({ ...item, categoryId: cat.id, categoryTitle: cat.title });
      });
    });
    return items;
  }, [categories]);

  const totalRequiredCount = allItems.length;
  const uploadedCount = useMemo(() => {
    return Object.keys(photosMap).filter(key => photosMap[key] && photosMap[key].photoUrl).length;
  }, [photosMap]);

  const completionPercentage = totalRequiredCount > 0 
    ? Math.round((uploadedCount / totalRequiredCount) * 100) 
    : 0;

  const handleTriggerUpload = (itemId) => {
    setCurrentUploadItemId(itemId);
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file || !currentUploadItemId) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target.result;
      const timestamp = new Date().toLocaleString('pt-BR');

      setPhotosMap(prev => ({
        ...prev,
        [currentUploadItemId]: {
          itemId: currentUploadItemId,
          photoUrl: dataUrl,
          timestamp,
          fileName: `${currentUploadItemId}_${Date.now()}.jpg`,
          notes: prev[currentUploadItemId]?.notes || '',
          driveStatus: driveConfig.autoSync ? 'Sincronizado no Drive' : 'Pendente Drive'
        }
      }));

      const itemInfo = allItems.find(i => i.id === currentUploadItemId);
      showToast(`Foto salva para "${itemInfo?.label || 'Item'}"!`);
      setCurrentUploadItemId(null);
      e.target.value = '';
    };
    reader.readAsDataURL(file);
  };

  const handleUpdateNotes = (itemId, notesText) => {
    setPhotosMap(prev => {
      if (!prev[itemId]) return prev;
      return {
        ...prev,
        [itemId]: {
          ...prev[itemId],
          notes: notesText
        }
      };
    });
  };

  const handleDeletePhoto = (itemId) => {
    setConfirmModal({
      title: 'Remover Foto',
      message: 'Tem certeza de que deseja remover esta foto?',
      confirmText: 'Excluir Foto',
      danger: true,
      onConfirm: () => {
        setPhotosMap(prev => {
          const copy = { ...prev };
          delete copy[itemId];
          return copy;
        });
        if (activePhotoModal?.item?.id === itemId) {
          setActivePhotoModal(null);
        }
        showToast('Foto removida do checklist.');
      }
    });
  };

  const handleAddDynamicPDV = (e) => {
    e.preventDefault();
    if (!newPdvNumber.trim()) return;
    const pdvNum = newPdvNumber.trim();
    const pdvId = `pdv_${pdvNum.toLowerCase().replace(/\s+/g, '_')}`;

    // Check if exists
    if (categories.some(c => c.id === pdvId)) {
      showToast('Atenção: Já existe uma categoria para este PDV.');
      return;
    }

    const newCategory = {
      id: pdvId,
      title: `PDV ${pdvNum}`,
      description: `Checklist completo do Caixa ${pdvNum}`,
      items: [
        { id: `pdv${pdvNum}_gaveta`, label: `PDV ${pdvNum} - Gaveta aberta`, instruction: 'Foto mostrando a gaveta aberta e funcionando.' },
        { id: `pdv${pdvNum}_cabos`, label: `PDV ${pdvNum} - Organização dos cabos`, instruction: 'Foto da organização técnica e chicote de cabos sob o balcão.' },
        { id: `pdv${pdvNum}_frontal`, label: `PDV ${pdvNum} - Parte frontal com tablet, pinpad e biometria`, instruction: 'Foto frontal completa com tablet, pinpad e leitor biométrico posicionados.' }
      ]
    };

    setCategories(prev => [...prev, newCategory]);
    setShowAddPdvModal(false);
    setNewPdvNumber('');
    showToast(`Categoria PDV ${pdvNum} adicionada ao checklist!`);
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (!newCategoryTitle.trim()) return;

    const catId = `cat_${Date.now()}`;
    const newCategory = {
      id: catId,
      title: newCategoryTitle.trim(),
      description: newCategoryDesc.trim() || 'Subcategorias e itens personalizados',
      items: []
    };

    setCategories(prev => [...prev, newCategory]);
    setShowAddCategoryModal(false);
    setNewCategoryTitle('');
    setNewCategoryDesc('');
    showToast(`Nova categoria "${newCategory.title}" criada com sucesso!`);
  };

  const handleOpenAddSubcategoryModal = (catId = '') => {
    setTargetCategoryId(catId || (categories[0]?.id || ''));
    setShowAddSubcategoryModal(true);
  };

  const handleAddSubcategory = (e) => {
    e.preventDefault();
    if (!newSubLabel.trim() || !targetCategoryId) return;

    const subId = `sub_${Date.now()}`;
    const newItem = {
      id: subId,
      label: newSubLabel.trim(),
      instruction: newSubInstruction.trim() || 'Foto descritiva para verificação do checklist.'
    };

    setCategories(prev => prev.map(cat => {
      if (cat.id === targetCategoryId) {
        return {
          ...cat,
          items: [...cat.items, newItem]
        };
      }
      return cat;
    }));

    setShowAddSubcategoryModal(false);
    setNewSubLabel('');
    setNewSubInstruction('');
    setTargetCategoryId('');
    showToast(`Subcategoria "${newItem.label}" adicionada!`);
  };

  const handleDeleteCategory = (catId, catTitle) => {
    setConfirmModal({
      title: 'Excluir Categoria',
      message: `Tem certeza de que deseja remover a categoria "${catTitle}" e todas as suas subcategorias?`,
      confirmText: 'Excluir Categoria',
      danger: true,
      onConfirm: () => {
        setCategories(prev => prev.filter(c => c.id !== catId));
        showToast(`Categoria "${catTitle}" removida.`);
      }
    });
  };

  const handleDeleteSubcategory = (catId, itemId, itemLabel) => {
    setConfirmModal({
      title: 'Excluir Subcategoria',
      message: `Tem certeza de que deseja remover a subcategoria "${itemLabel}"?`,
      confirmText: 'Excluir Subcategoria',
      danger: true,
      onConfirm: () => {
        setCategories(prev => prev.map(cat => {
          if (cat.id === catId) {
            return {
              ...cat,
              items: cat.items.filter(i => i.id !== itemId)
            };
          }
          return cat;
        }));

        setPhotosMap(prev => {
          const copy = { ...prev };
          delete copy[itemId];
          return copy;
        });

        showToast(`Subcategoria "${itemLabel}" removida.`);
      }
    });
  };

  const handleResetAudit = () => {
    setConfirmModal({
      title: 'Resetar Checklist',
      message: 'Atenção: Isso irá apagar TODAS as fotos salvas deste relatório. Deseja continuar?',
      confirmText: 'Sim, Apagar Tudo',
      danger: true,
      onConfirm: () => {
        setPhotosMap({});
        showToast('Checklist zerado com sucesso.');
      }
    });
  };

  const handleSyncDriveAll = () => {
    setIsSyncingDrive(true);
    setTimeout(() => {
      setPhotosMap(prev => {
        const updated = { ...prev };
        Object.keys(updated).forEach(key => {
          if (updated[key]) {
            updated[key].driveStatus = 'Sincronizado no Drive';
          }
        });
        return updated;
      });
      setIsSyncingDrive(false);
      showToast('Todas as fotos foram sincronizadas na pasta do Google Drive!');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-white flex flex-col">
      {/* Hidden File Input for Direct Camera or File Picker */}
      <input 
        type="file" 
        ref={fileInputRef} 
        accept="image/*" 
        capture="environment"
        onChange={handleFileChange} 
        className="hidden" 
      />

      {/* Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white px-5 py-3 rounded-xl shadow-2xl font-medium text-sm flex items-center gap-2 animate-bounce">
          <Icon name="check-circle" className="w-5 h-5" />
          {toastMessage}
        </div>
      )}

      {/* Header Bar */}
      <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* App Title & Store Meta */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-md">
                <Icon name="camera" className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  Registro de Fotos de Instalação
                  <span className="text-[10px] uppercase font-bold bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30">
                    Drive Sync
                  </span>
                </h1>
                <p className="text-xs text-slate-400">
                  {storeInfo.storeName} ({storeInfo.storeCode}) • O.S.: {storeInfo.osNumber}
                </p>
              </div>
            </div>

            {/* Mobile Drive Quick Badge */}
            <button 
              onClick={() => setShowDriveModal(true)}
              className="md:hidden p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-slate-700"
              title="Configurações do Google Drive"
            >
              <Icon name="drive" className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex items-center gap-1.5 bg-slate-950 p-1.5 rounded-2xl border border-slate-800 w-full md:w-auto justify-center">
            <button
              onClick={() => setActiveTab('checklist')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition flex items-center gap-2 ${
                activeTab === 'checklist'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Icon name="check-circle" className="w-4 h-4" />
              Checklist ({uploadedCount}/{totalRequiredCount})
            </button>

            <button
              onClick={() => setActiveTab('drive')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition flex items-center gap-2 ${
                activeTab === 'drive'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Icon name="drive" className="w-4 h-4" />
              Google Drive
            </button>

            <button
              onClick={() => setActiveTab('report')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition flex items-center gap-2 ${
                activeTab === 'report'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Icon name="download" className="w-4 h-4" />
              Relatório Final
            </button>
          </nav>
        </div>
      </header>

      {/* Sub-Header: Store Info Bar & Progress */}
      <section className="bg-slate-900/60 border-b border-slate-800 py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Store Info Inputs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div>
              <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Loja / Cliente</label>
              <input 
                type="text" 
                value={storeInfo.storeName}
                onChange={(e) => setStoreInfo(prev => ({ ...prev, storeName: e.target.value }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-white focus:outline-none focus:border-emerald-500 font-medium"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Código / Filial</label>
              <input 
                type="text" 
                value={storeInfo.storeCode}
                onChange={(e) => setStoreInfo(prev => ({ ...prev, storeCode: e.target.value }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-white focus:outline-none focus:border-emerald-500 font-medium"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Técnico Responsável</label>
              <input 
                type="text" 
                value={storeInfo.technicianName}
                onChange={(e) => setStoreInfo(prev => ({ ...prev, technicianName: e.target.value }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-white focus:outline-none focus:border-emerald-500 font-medium"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Nº da O.S. / Chamado</label>
              <input 
                type="text" 
                value={storeInfo.osNumber}
                onChange={(e) => setStoreInfo(prev => ({ ...prev, osNumber: e.target.value }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-white focus:outline-none focus:border-emerald-500 font-medium"
              />
            </div>
          </div>

          {/* Progress Tracker Card */}
          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex items-center gap-4 min-w-[280px]">
            <div className="flex-1">
              <div className="flex justify-between items-center text-xs mb-1.5">
                <span className="font-semibold text-slate-300">Progresso de Fotos</span>
                <span className="font-bold text-emerald-400">{completionPercentage}% ({uploadedCount}/{totalRequiredCount})</span>
              </div>
              <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-500 rounded-full"
                  style={{ width: `${completionPercentage}%` }}
                />
              </div>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={() => setShowAddCategoryModal(true)}
                className="px-3 py-2 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 text-xs font-semibold rounded-lg border border-emerald-500/30 transition flex items-center gap-1"
                title="Criar Nova Categoria Principal"
              >
                <Icon name="plus" className="w-3.5 h-3.5" />
                + Categoria
              </button>

              <button
                onClick={() => handleOpenAddSubcategoryModal()}
                className="px-3 py-2 bg-teal-600/20 hover:bg-teal-600/30 text-teal-300 text-xs font-semibold rounded-lg border border-teal-500/30 transition flex items-center gap-1"
                title="Criar Nova Subcategoria/Item"
              >
                <Icon name="plus" className="w-3.5 h-3.5" />
                + Subcategoria
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content View */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8">

        {/* TAB 1: CHECKLIST & PHOTO TAKING */}
        {activeTab === 'checklist' && (
          <div className="space-y-8">
            
            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-900 p-4 rounded-2xl border border-slate-800">
              <div>
                <h2 className="text-base font-bold text-white flex items-center gap-2">
                  <Icon name="store" className="w-5 h-5 text-emerald-400" />
                  Checklist de Registro Fotográfico
                </h2>
                <p className="text-xs text-slate-400">Capture fotos, adicione categorias e subcategorias personalizadas para o relatório.</p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setShowAddCategoryModal(true)}
                  className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-emerald-400 text-xs font-semibold rounded-xl border border-slate-700 transition flex items-center gap-1.5"
                >
                  <Icon name="plus" className="w-4 h-4" />
                  Nova Categoria
                </button>

                <button
                  onClick={() => handleOpenAddSubcategoryModal()}
                  className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-teal-300 text-xs font-semibold rounded-xl border border-slate-700 transition flex items-center gap-1.5"
                >
                  <Icon name="plus" className="w-4 h-4" />
                  Nova Subcategoria
                </button>

                <button
                  onClick={handleSyncDriveAll}
                  disabled={isSyncingDrive || uploadedCount === 0}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white text-xs font-semibold rounded-xl transition flex items-center gap-2 shadow-lg shadow-emerald-900/30"
                >
                  <Icon name="cloud-upload" className={`w-4 h-4 ${isSyncingDrive ? 'animate-spin' : ''}`} />
                  {isSyncingDrive ? 'Sincronizando...' : 'Drive Sync'}
                </button>

                <button
                  onClick={handleResetAudit}
                  className="p-2 bg-slate-800 hover:bg-rose-950/60 hover:text-rose-400 text-slate-400 rounded-xl border border-slate-700 transition"
                  title="Limpar fotos da instalação"
                >
                  <Icon name="refresh" className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Categories & Requirements Grid */}
            <div className="space-y-6">
              {categories.map((cat) => {
                const catUploaded = cat.items.filter(item => photosMap[item.id]?.photoUrl).length;
                const catTotal = cat.items.length;
                const isCatComplete = catTotal > 0 && catUploaded === catTotal;

                return (
                  <div key={cat.id} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
                    
                    {/* Category Header */}
                    <div className="bg-slate-900/90 px-6 py-4 border-b border-slate-800 flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                          {catTotal === 0 ? (
                            <span className="text-[10px] bg-slate-800 text-slate-400 font-bold px-2.5 py-0.5 rounded-full border border-slate-700">
                              Sem Subcategorias
                            </span>
                          ) : isCatComplete ? (
                            <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2.5 py-0.5 rounded-full border border-emerald-500/40 flex items-center gap-1">
                              <Icon name="check-circle" className="w-3 h-3" />
                              Completo ({catUploaded}/{catTotal})
                            </span>
                          ) : (
                            <span className="text-[10px] bg-amber-500/20 text-amber-300 font-bold px-2.5 py-0.5 rounded-full border border-amber-500/40">
                              Pendente ({catUploaded}/{catTotal})
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">{cat.description}</p>
                      </div>

                      {/* Category Action Buttons */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleOpenAddSubcategoryModal(cat.id)}
                          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-teal-300 text-xs font-semibold rounded-lg border border-slate-700 transition flex items-center gap-1 shrink-0"
                          title="Adicionar Subcategoria nesta Categoria"
                        >
                          <Icon name="plus" className="w-3.5 h-3.5" />
                          + Subcategoria
                        </button>

                        <button
                          onClick={() => handleDeleteCategory(cat.id, cat.title)}
                          className="p-1.5 bg-slate-800/80 hover:bg-rose-950/60 hover:text-rose-400 text-slate-500 rounded-lg border border-slate-700 transition"
                          title="Excluir esta categoria"
                        >
                          <Icon name="trash" className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Requirements Items / Subcategories Grid */}
                    {cat.items.length === 0 ? (
                      <div className="p-8 text-center bg-slate-950/30">
                        <p className="text-xs text-slate-500 mb-3">Nenhuma subcategoria/item cadastrado nesta categoria.</p>
                        <button
                          onClick={() => handleOpenAddSubcategoryModal(cat.id)}
                          className="px-4 py-2 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 text-xs font-medium rounded-xl transition inline-flex items-center gap-1.5"
                        >
                          <Icon name="plus" className="w-4 h-4" />
                          Adicionar Subcategoria Agora
                        </button>
                      </div>
                    ) : (
                      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {cat.items.map((item) => {
                          const photoData = photosMap[item.id];
                          const hasPhoto = Boolean(photoData?.photoUrl);

                          return (
                            <div 
                              key={item.id} 
                              className={`rounded-2xl border p-4 flex flex-col justify-between transition-all ${
                                hasPhoto 
                                  ? 'bg-slate-950/80 border-emerald-500/40 shadow-lg shadow-emerald-950/20' 
                                  : 'bg-slate-950/40 border-slate-800 hover:border-slate-700'
                              }`}
                            >
                              <div>
                                {/* Item Header */}
                                <div className="flex items-start justify-between gap-2 mb-2">
                                  <h4 className="text-sm font-semibold text-slate-100">{item.label}</h4>
                                  <div className="flex items-center gap-1 shrink-0">
                                    {hasPhoto ? (
                                      <span className="p-1 bg-emerald-500/20 text-emerald-400 rounded-full">
                                        <Icon name="check-circle" className="w-4 h-4" />
                                      </span>
                                    ) : (
                                      <span className="text-[10px] font-bold bg-slate-800 text-slate-400 px-2 py-0.5 rounded">
                                        Pendente
                                      </span>
                                    )}

                                    <button
                                      onClick={() => handleDeleteSubcategory(cat.id, item.id, item.label)}
                                      className="p-1 text-slate-600 hover:text-rose-400 transition ml-1"
                                      title="Remover Subcategoria"
                                    >
                                      <Icon name="trash" className="w-3.5 h-3.5" />
                                    </button>
                                  </div>
                                </div>

                                <p className="text-xs text-slate-400 mb-4 line-clamp-2">{item.instruction}</p>

                                {/* Photo Preview Container */}
                                {hasPhoto ? (
                                  <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-700 group bg-black/60 mb-3">
                                    <img 
                                      src={photoData.photoUrl} 
                                      alt={item.label} 
                                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                                    
                                    {/* Sync badge on image */}
                                    <div className="absolute top-2 left-2 z-10">
                                      <span className="text-[10px] font-semibold bg-black/70 text-emerald-300 backdrop-blur-md px-2 py-0.5 rounded border border-emerald-500/30 flex items-center gap-1">
                                        <Icon name="drive" className="w-3 h-3" />
                                        {photoData.driveStatus}
                                      </span>
                                    </div>

                                    {/* Zoom Overlay */}
                                    <button
                                      onClick={() => setActivePhotoModal({ item, photo: photoData })}
                                      className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                      <span className="px-3 py-1.5 bg-emerald-600 text-white rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-xl">
                                        <Icon name="eye" className="w-4 h-4" /> Ampliar / Editar
                                      </span>
                                    </button>
                                  </div>
                                ) : (
                                  <div 
                                    onClick={() => handleTriggerUpload(item.id)}
                                    className="border-2 border-dashed border-slate-800 hover:border-emerald-500/50 bg-slate-900/50 hover:bg-slate-900 rounded-xl aspect-video flex flex-col items-center justify-center p-4 cursor-pointer transition-all group mb-3"
                                  >
                                    <div className="w-10 h-10 rounded-full bg-slate-800 group-hover:bg-emerald-500/20 text-slate-400 group-hover:text-emerald-400 flex items-center justify-center mb-2 transition">
                                      <Icon name="camera" className="w-5 h-5" />
                                    </div>
                                    <span className="text-xs font-medium text-slate-300 group-hover:text-emerald-300">Tirar / Enviar Foto</span>
                                    <span className="text-[10px] text-slate-500 mt-0.5">Clique para capturar</span>
                                  </div>
                                )}

                                {/* Technical Notes Field */}
                                {hasPhoto && (
                                  <div className="mt-2">
                                    <input 
                                      type="text"
                                      placeholder="Obs: ex: S/N FortiGate: FG60F-123456"
                                      value={photoData.notes || ''}
                                      onChange={(e) => handleUpdateNotes(item.id, e.target.value)}
                                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-300 placeholder-slate-600 focus:outline-none focus:border-emerald-500"
                                    />
                                  </div>
                                )}
                              </div>

                              {/* Item Footer Buttons */}
                              <div className="pt-3 mt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                                {hasPhoto ? (
                                  <>
                                    <span className="text-[10px] text-slate-500">{photoData.timestamp}</span>
                                    <div className="flex items-center gap-2">
                                      <button
                                        onClick={() => handleTriggerUpload(item.id)}
                                        className="text-slate-400 hover:text-white transition"
                                        title="Refazer foto"
                                      >
                                        Refazer
                                      </button>
                                      <button
                                        onClick={() => handleDeletePhoto(item.id)}
                                        className="text-rose-400 hover:text-rose-300 transition"
                                        title="Excluir foto"
                                      >
                                        <Icon name="trash" className="w-3.5 h-3.5" />
                                      </button>
                                    </div>
                                  </>
                                ) : (
                                  <button
                                    onClick={() => handleTriggerUpload(item.id)}
                                    className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 font-medium rounded-lg border border-slate-800 transition text-xs flex items-center justify-center gap-1.5"
                                  >
                                    <Icon name="camera" className="w-4 h-4 text-emerald-400" />
                                    Capturar Foto
                                  </button>
                                )}
                              </div>

                            </div>
                          );
                        })}
                      </div>
                    )}

                  </div>
                );
              })}
            </div>

          </div>
        )}

        {/* TAB 2: GOOGLE DRIVE INTEGRATION & FOLDER PREVIEW */}
        {activeTab === 'drive' && (
          <div className="space-y-6 max-w-4xl mx-auto">
            
            {/* Google Drive Status Banner */}
            <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-slate-800 rounded-2xl border border-slate-700 text-white shrink-0">
                    <Icon name="drive" className="w-10 h-10" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                      Sincronização em Nuvem Ativa
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-1.5">Google Drive da Instalação</h2>
                    <p className="text-xs text-slate-400 mt-1">
                      Conta vinculada: <strong className="text-slate-200">{driveConfig.googleAccount}</strong>
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleSyncDriveAll}
                  disabled={isSyncingDrive || uploadedCount === 0}
                  className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl shadow-lg shadow-emerald-900/30 transition flex items-center justify-center gap-2"
                >
                  <Icon name="cloud-upload" className="w-4 h-4" />
                  Sincronizar Todas ({uploadedCount} Fotos)
                </button>
              </div>
            </div>

            {/* Folder Structure Preview on Google Drive */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Icon name="folder" className="w-5 h-5 text-amber-400" />
                    Estrutura de Pastas Gerada
                  </h3>
                  <p className="text-xs text-slate-400">
                    Pasta Raiz: <code className="bg-slate-950 px-2 py-0.5 rounded text-emerald-400 font-mono">/{driveConfig.folderName}/{storeInfo.storeCode}_{storeInfo.storeName.replace(/\s+/g, '_')}</code>
                  </p>
                </div>
              </div>

              {/* Dynamic Folder Tree View */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs space-y-3">
                <div className="text-slate-300 flex items-center gap-2">
                  <Icon name="folder" className="w-4 h-4 text-amber-400" />
                  <span className="font-bold text-white">📁 Google Drive / {driveConfig.folderName} / [{storeInfo.storeCode}] {storeInfo.storeName}</span>
                </div>

                <div className="pl-6 space-y-2 border-l border-slate-800 ml-2">
                  {categories.map((cat) => {
                    const catPhotos = cat.items.filter(i => photosMap[i.id]?.photoUrl);
                    return (
                      <div key={cat.id} className="space-y-1">
                        <div className="text-slate-300 flex items-center gap-2">
                          <Icon name="folder" className="w-3.5 h-3.5 text-amber-300" />
                          <span className="font-semibold text-slate-200">{cat.title}</span>
                          <span className="text-[10px] text-slate-500 font-sans">({catPhotos.length} arquivo(s))</span>
                        </div>

                        <div className="pl-6 space-y-1 border-l border-slate-800/80 ml-1.5">
                          {cat.items.map((item) => {
                            const pData = photosMap[item.id];
                            return (
                              <div key={item.id} className="flex items-center justify-between text-[11px] py-0.5">
                                <span className={pData ? 'text-emerald-400' : 'text-slate-600'}>
                                  📄 {item.id}.jpg {pData?.notes ? `— (${pData.notes})` : ''}
                                </span>
                                <span className={`text-[10px] font-sans px-2 py-0.2 rounded ${
                                  pData ? 'bg-emerald-500/10 text-emerald-300' : 'bg-slate-900 text-slate-600'
                                }`}>
                                  {pData ? 'Sincronizado' : 'Pendente'}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* TAB 3: AUDIT REPORT & EXPORT SUMMARY */}
        {activeTab === 'report' && (
          <div className="space-y-6 max-w-5xl mx-auto">
            
            {/* Report Header Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-xl">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  Relatório Técnico de Vistoria
                </span>
                <h2 className="text-2xl font-extrabold text-white mt-2">Laudo Fotográfico de Instalação</h2>
                <p className="text-xs text-slate-400 mt-1">
                  Cliente: <strong className="text-slate-200">{storeInfo.storeName} ({storeInfo.storeCode})</strong> • Técnico: {storeInfo.technicianName} • O.S.: {storeInfo.osNumber}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => window.print()}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-xl shadow-lg shadow-emerald-900/30 transition flex items-center gap-2"
                >
                  <Icon name="download" className="w-4 h-4" /> Imprimir / PDF
                </button>
              </div>
            </div>

            {/* Completeness Alert */}
            {completionPercentage < 100 && (
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 flex items-center gap-3 text-amber-300 text-xs">
                <Icon name="alert" className="w-6 h-6 shrink-0" />
                <div>
                  <strong className="font-bold block">Atenção: Relatório Parcial</strong>
                  Existem {totalRequiredCount - uploadedCount} foto(s) pendentes no checklist. Você pode exportar o relatório atual ou finalizar as fotos antes de enviar.
                </div>
              </div>
            )}

            {/* Printable Report Content */}
            <div className="space-y-8 bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-800">
              
              {categories.map((cat) => {
                const catPhotos = cat.items.filter(item => photosMap[item.id]?.photoUrl);

                return (
                  <div key={cat.id} className="space-y-4">
                    <h3 className="text-base font-bold text-white border-b border-slate-800 pb-2 flex items-center justify-between">
                      <span>{cat.title}</span>
                      <span className="text-xs font-normal text-slate-400">{catPhotos.length}/{cat.items.length} Registradas</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {cat.items.map((item) => {
                        const photoData = photosMap[item.id];
                        return (
                          <div key={item.id} className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden p-3 flex flex-col justify-between">
                            <div>
                              <div className="aspect-video bg-black/60 rounded-lg overflow-hidden border border-slate-800 mb-2.5 relative">
                                {photoData ? (
                                  <img src={photoData.photoUrl} alt={item.label} className="w-full h-full object-cover" />
                                ) : (
                                  <div className="w-full h-full flex flex-col items-center justify-center text-slate-600 text-[11px]">
                                    <Icon name="camera" className="w-6 h-6 mb-1 opacity-40" />
                                    <span>Sem foto</span>
                                  </div>
                                )}
                              </div>
                              <h4 className="text-xs font-semibold text-slate-200 line-clamp-1">{item.label}</h4>
                              {photoData?.notes && (
                                <p className="text-[11px] text-emerald-400 mt-1 italic bg-slate-900 p-1.5 rounded border border-slate-800">
                                  "{photoData.notes}"
                                </p>
                              )}
                            </div>

                            <div className="mt-3 pt-2 border-t border-slate-900 flex justify-between items-center text-[10px] text-slate-500">
                              <span>{photoData ? photoData.timestamp : 'Pendente'}</span>
                              <span className={photoData ? 'text-emerald-400 font-bold' : 'text-amber-500'}>
                                {photoData ? 'OK' : 'Faltando'}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}

            </div>

          </div>
        )}

      </main>

      {/* MODAL 1: Photo Zoom & Edit Notes Modal */}
      {activePhotoModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-hidden">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row overflow-hidden shadow-2xl">
            
            {/* Image display */}
            <div className="flex-1 bg-black flex items-center justify-center p-4 min-h-[300px]">
              <img 
                src={activePhotoModal.photo.photoUrl} 
                alt={activePhotoModal.item.label} 
                className="max-h-[70vh] max-w-full object-contain"
              />
            </div>

            {/* Sidebar info & notes */}
            <div className="w-full md:w-80 p-6 bg-slate-900 border-t md:border-t-0 md:border-l border-slate-800 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">
                      Foto Registrada
                    </span>
                    <h3 className="text-base font-bold text-white mt-1">{activePhotoModal.item.label}</h3>
                  </div>
                  <button onClick={() => setActivePhotoModal(null)} className="text-slate-400 hover:text-white">
                    <Icon name="x" className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-xs text-slate-400">{activePhotoModal.item.instruction}</p>

                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1">
                  <div>Data: <strong>{activePhotoModal.photo.timestamp}</strong></div>
                  <div>Google Drive: <strong className="text-emerald-400">{activePhotoModal.photo.driveStatus}</strong></div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Anotação Técnica / Observação
                  </label>
                  <textarea 
                    rows={3}
                    placeholder="Escreva números de série, observações de montagem..."
                    value={activePhotoModal.photo.notes || ''}
                    onChange={(e) => handleUpdateNotes(activePhotoModal.item.id, e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 resize-none"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => handleDeletePhoto(activePhotoModal.item.id)}
                  className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1"
                >
                  <Icon name="trash" className="w-4 h-4" /> Excluir
                </button>

                <button
                  onClick={() => setActivePhotoModal(null)}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-xl"
                >
                  Concluído
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* MODAL 2: Add Custom PDV Modal */}
      {showAddPdvModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Icon name="plus" className="w-5 h-5 text-emerald-400" />
                Adicionar Categoria para Novo PDV
              </h3>
              <button onClick={() => setShowAddPdvModal(false)} className="text-slate-400 hover:text-white">
                <Icon name="x" className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddDynamicPDV} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Número / Identificador do PDV
                </label>
                <input
                  type="text"
                  placeholder="Ex: 5, 6, Self-Checkout A"
                  value={newPdvNumber}
                  onChange={(e) => setNewPdvNumber(e.target.value)}
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                />
                <p className="text-[11px] text-slate-500 mt-1">
                  Será criado automaticamente o trio de fotos: Gaveta Aberta, Organização de Cabos e Frente com Tablet/Pinpad.
                </p>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddPdvModal(false)}
                  className="px-4 py-2 bg-slate-800 text-slate-300 text-xs font-semibold rounded-xl"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-xl shadow-lg"
                >
                  Adicionar PDV
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 3: Add Custom Main Category */}
      {showAddCategoryModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Icon name="folder" className="w-5 h-5 text-emerald-400" />
                Criar Nova Categoria
              </h3>
              <button onClick={() => setShowAddCategoryModal(false)} className="text-slate-400 hover:text-white">
                <Icon name="x" className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddCategory} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Nome da Categoria
                </label>
                <input
                  type="text"
                  placeholder="Ex: Rack de Servidores, Balança & Açougue, CFTV"
                  value={newCategoryTitle}
                  onChange={(e) => setNewCategoryTitle(e.target.value)}
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Descrição ou Instrução Geral (Opcional)
                </label>
                <input
                  type="text"
                  placeholder="Ex: Registro fotográfico dos Nobreaks, Switchs e cabeamento"
                  value={newCategoryDesc}
                  onChange={(e) => setNewCategoryDesc(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddCategoryModal(false)}
                  className="px-4 py-2 bg-slate-800 text-slate-300 text-xs font-semibold rounded-xl"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-xl shadow-lg"
                >
                  Criar Categoria
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 4: Add Custom Subcategory / Requirement Item */}
      {showAddSubcategoryModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Icon name="plus" className="w-5 h-5 text-teal-400" />
                Adicionar Subcategoria / Item
              </h3>
              <button onClick={() => setShowAddSubcategoryModal(false)} className="text-slate-400 hover:text-white">
                <Icon name="x" className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddSubcategory} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Categoria Pai
                </label>
                <select
                  value={targetCategoryId}
                  onChange={(e) => setTargetCategoryId(e.target.value)}
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                >
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>{c.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Nome da Subcategoria / Item
                </label>
                <input
                  type="text"
                  placeholder="Ex: Foto do Nobreak ligado, Identificação de Path Panel"
                  value={newSubLabel}
                  onChange={(e) => setNewSubLabel(e.target.value)}
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Instrução para o Técnico (Opcional)
                </label>
                <input
                  type="text"
                  placeholder="Ex: Tirar foto focando na etiqueta de identificação"
                  value={newSubInstruction}
                  onChange={(e) => setNewSubInstruction(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddSubcategoryModal(false)}
                  className="px-4 py-2 bg-slate-800 text-slate-300 text-xs font-semibold rounded-xl"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold rounded-xl shadow-lg"
                >
                  Adicionar Subcategoria
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 5: Custom Confirmation Modal (Replaces browser confirm/alert) */}
      {confirmModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Icon name="alert" className={`w-5 h-5 ${confirmModal.danger ? 'text-rose-400' : 'text-emerald-400'}`} />
                {confirmModal.title}
              </h3>
              <button onClick={() => setConfirmModal(null)} className="text-slate-400 hover:text-white">
                <Icon name="x" className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {confirmModal.message}
            </p>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setConfirmModal(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl transition"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={() => {
                  if (confirmModal.onConfirm) confirmModal.onConfirm();
                  setConfirmModal(null);
                }}
                className={`px-5 py-2 text-white text-xs font-semibold rounded-xl shadow-lg transition ${
                  confirmModal.danger 
                    ? 'bg-rose-600 hover:bg-rose-500' 
                    : 'bg-emerald-600 hover:bg-emerald-500'
                }`}
              >
                {confirmModal.confirmText || 'Confirmar'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        <p>Sistema de Controle Fotográfico de Instalação de Loja • Categorias & Subcategorias Customizáveis • Integração com Google Drive</p>
      </footer>
    </div>
  );
}