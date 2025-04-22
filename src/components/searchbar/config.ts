export type PageType = 'category' | 'product' | 'default';

export const PLACEHOLDER_MAP: Record<PageType, string> = {
  category: 'Pesquise por categorias',
  product: 'Pesquise por produtos',
  default: 'Pesquisar...',
};
