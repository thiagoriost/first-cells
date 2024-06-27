import { BGADPCardsGetV1 } from '@cells-components/bgadp-cards-v1';

export const getCardsList = options => new Promise((ok, ko) => {
  let service = new BGADPCardsGetV1(options);
  service.generateRequest()
    .then(request => JSON.parse(request.response))
    .then(({ data }) => ok(data))
    .catch(error => ko(error));
  });
