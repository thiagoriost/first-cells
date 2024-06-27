import { BGADPCardsCardGetV1 } from '@cells-components/bgadp-cards-v1';

export const getCardDetail = (cardId, options) => new Promise((ok, ko) => {
  const service = new BGADPCardsCardGetV1(options);
  service.params = { 'card-id': cardId };
  service.generateRequest()
    .then(request => JSON.parse(request.response))
    .then(({ data }) => ok(data))
    .catch(error => ko(error));
});
