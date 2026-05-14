export type ProjectItem = {
  id: number;
  title: string;
  description: string;
  href?: string;
  image: string;
  textColor: 'white' | 'black';
};

export const projects: ProjectItem[] = Array.from({ length: 42 }, (_, index) => {
  const id = index + 1;

  return {
    id,
    title: `Proyecto ${id}`,
    description: `Descripción del Proyecto ${id}`,
    image: `/images/proyects/${id}.jpg`,
    textColor: id === 7 ? 'black' : 'white'
  };
});
