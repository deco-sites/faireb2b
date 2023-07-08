import Icon from "$store/components/ui/Icon.tsx";

interface Props {
  rating: number;
  id?: string;
}

export const StarRating = ({ rating, id }: Props) => {
  const filledColor = "#333333"; // Cor para estrelas preenchidas
  const emptyColor = "#fff"; // Cor para estrelas vazias

  // Função para criar o gradiente linear com base na porcentagem do valor total
  const createLinearGradient = (percentage: number) => {
    const gradientId = `gradient-${percentage}-${id}`;

    return (
      <linearGradient id={gradientId}>
        <stop offset={`${percentage}%`} stopColor={filledColor} />
        <stop offset={`${percentage}%`} stopColor={emptyColor} />
      </linearGradient>
    );
  };

  // Função para criar uma estrela individual
  const createStar = (index: number, percentage: number) => {
    const gradientId = `gradient-${percentage}-${id}`;
    const uniqueKey = `star-${index}-${id}`;

    return (
      <svg
        key={uniqueKey}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
      >
        {createLinearGradient(percentage)}
        <path
          fill={`url(#${gradientId})`}
          stroke={filledColor}
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12.8436 1.87024L15.5573 7.37138C15.625 7.50794 15.7247 7.62606 15.8481 7.71563C15.9714 7.8052 16.1145 7.86355 16.2653 7.88567L22.3373 8.77024C22.5104 8.79635 22.6727 8.87028 22.806 8.9837C22.9392 9.09711 23.0382 9.2455 23.0917 9.41214C23.1451 9.57878 23.151 9.75703 23.1086 9.92682C23.0662 10.0966 22.9772 10.2512 22.8516 10.3731L18.4562 14.6588C18.3471 14.765 18.2655 14.8963 18.2186 15.0412C18.1717 15.1861 18.1609 15.3402 18.187 15.4902L19.2242 21.5451C19.2547 21.7189 19.2356 21.8978 19.1692 22.0613C19.1027 22.2248 18.9916 22.3662 18.8484 22.4694C18.7053 22.5727 18.536 22.6335 18.3599 22.645C18.1838 22.6564 18.0081 22.618 17.8528 22.5342L12.4373 19.6868C12.3025 19.6159 12.1525 19.5789 12.0002 19.5789C11.8479 19.5789 11.6979 19.6159 11.563 19.6868L6.1339 22.5428C5.9786 22.6266 5.80284 22.665 5.62674 22.6535C5.45064 22.6421 5.28134 22.5812 5.13821 22.478C4.99509 22.3748 4.88393 22.2333 4.81748 22.0698C4.75102 21.9064 4.73196 21.7275 4.76247 21.5537L5.79961 15.4988C5.82577 15.3488 5.81493 15.1946 5.76803 15.0498C5.72113 14.9049 5.63958 14.7736 5.53047 14.6674L1.1419 10.3782C1.01635 10.2563 0.927353 10.1018 0.88494 9.93196C0.842527 9.76218 0.848384 9.58392 0.90185 9.41728C0.955317 9.25064 1.05427 9.10225 1.18755 8.98884C1.32083 8.87542 1.48314 8.80149 1.65618 8.77538L7.73504 7.88567C7.88583 7.86355 8.02901 7.8052 8.15232 7.71563C8.27562 7.62606 8.37538 7.50794 8.44304 7.37138L11.1568 1.87024C11.2346 1.71304 11.3548 1.58072 11.5038 1.48821C11.6529 1.3957 11.8248 1.34668 12.0002 1.34668C12.1756 1.34668 12.3475 1.3957 12.4965 1.48821C12.6456 1.58072 12.7658 1.71304 12.8436 1.87024V1.87024Z"
        />
      </svg>
    );
  };

  // Função para criar todas as estrelas com base no valor fracionado
  const createStarRating = (rating: number) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating); // Parte inteira do valor
    const decimalStar = rating - fullStars; // Parte fracionária do valor

    const stars = [];

    // Criar estrelas cheias
    for (let i = 0; i < fullStars; i++) {
      stars.push(createStar(i, 100));
    }

    // Criar estrela parcial
    if (decimalStar > 0) {
      const percentage = Math.round(decimalStar * 100);
      stars.push(createStar(fullStars, percentage));
    }

    // Criar estrelas vazias
    for (let i = stars.length; i < totalStars; i++) {
      stars.push(createStar(i, 0));
    }

    return stars;
  };

  return <div className="flex gap-1">{createStarRating(rating)}</div>;
};
