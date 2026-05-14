export type ProjectItem = {
  id: number;
  title: string;
  description: string;
  href?: string;
  image: string;
  textColor: 'white' | 'black';
};

export const projects: ProjectItem[] = Array.from({ length: 41 }, (_, index) => {
  const id = index + 1;

  return {
    id,
    title: `Proyecto ${id}`,
    description: `Descripción del Proyecto ${id}`,
    image: `/images/projects/${id}.jpg`,
    textColor: id === 7 ? 'black' : 'white'
  };
});
